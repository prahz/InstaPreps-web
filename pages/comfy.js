
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Send, User, Bot, PlusCircle, LogOut, MessageSquare, Menu, BookOpen, ExternalLink } from 'lucide-react';
import Head from 'next/head';
import Chatbot from "src/components/comfy/Chatbot";
import VerticalSidebar from "src/components/VerticalSidebar";

// --- CONFIGURATION ---
const API_BASE = process.env.NEXT_PUBLIC_BASE_API_URL_COMFY ;

const generateSessionId = () => {
  return 'sess_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
};

export default function ComfyChat() {
  // --- STATE ---
  const [studentId, setStudentId] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);

  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState([]);
  const [fullHistory, setFullHistory] = useState([]);
  const [historyList, setHistoryList] = useState([]);
  const [currentSessionId, setCurrentSessionId] = useState(null);
  
  const [loading, setLoading] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const bottomRef = useRef(null);

  // --- 1. AUTHENTICATION ---
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userStr = localStorage.getItem('user');
      if (userStr) {
        try {
          const user = JSON.parse(userStr);
          const safeName = user.username || user.first_name || 'Student';
          const safeContact = user.contact || user.mobile_no || 'NoContact';
          const uniqueId = `${safeName}_${safeContact}`;

          setStudentId(uniqueId);
          setIsLoggedIn(true);
          fetchHistoryList(uniqueId);
        } catch (e) {
          console.error("Auth Error:", e);
        }
      }
      setAuthLoading(false);
    }
  }, []);

  // --- 2. HISTORY ---
  const fetchHistoryList = async (id) => {
    const targetId = id || studentId;
    if (!targetId) return;

    try {
      const res = await axios.post(`${API_BASE}/history`, { student_id: targetId });
      const data = Array.isArray(res.data) ? res.data : [];
      setFullHistory(data);

      const sessions = {};
      data.forEach(msg => {
        if (!sessions[msg.session_id]) {
          sessions[msg.session_id] = {
            firstMessage: msg,
            lastTimestamp: msg.timestamp
          };
        }
        if (parseFloat(msg.timestamp) > parseFloat(sessions[msg.session_id].lastTimestamp)) {
          sessions[msg.session_id].lastTimestamp = msg.timestamp;
        }
      });

      let sidebarItems = Object.values(sessions).map(s => s.firstMessage);
      sidebarItems.sort((a, b) => 
        parseFloat(sessions[b.session_id].lastTimestamp) -
        parseFloat(sessions[a.session_id].lastTimestamp)
      );

      setHistoryList(sidebarItems);
    } catch (err) {
      console.error("History Error:", err);
    }
  };

  // --- 3. CHAT OPERATIONS ---
  const startNewChat = () => {
    setMessages([]);
    setCurrentSessionId(null);
    if (window.innerWidth <= 768) setIsSidebarOpen(false);
  };

  const loadChatFromHistory = (selectedMsg) => {
    setCurrentSessionId(selectedMsg.session_id);
    const thread = fullHistory.filter(m => m.session_id === selectedMsg.session_id);
    thread.sort((a, b) => parseFloat(a.timestamp) - parseFloat(b.timestamp));
    
    if (thread.length > 0) setMessages(thread);
    else setMessages([selectedMsg]);

    if (window.innerWidth <= 768) setIsSidebarOpen(false);
  };

  const handleSearch = async (e, manualQuery = null) => {
    if (e) e.preventDefault();
    const userText = manualQuery || query;
    if (!userText.trim()) return;

    const activeSessionId = currentSessionId || generateSessionId();
    if (!currentSessionId) setCurrentSessionId(activeSessionId);

    setMessages(prev => [...prev, { role: 'user', content: userText }]);
    setQuery('');
    setLoading(true);

    try {
      const res = await axios.post(`${API_BASE}/chat`, {
        query: userText,
        student_id: studentId,
        session_id: activeSessionId
      });

      if (res.data.session_id && res.data.session_id !== activeSessionId) {
        setCurrentSessionId(res.data.session_id);
      }

      const aiMsg = { 
        role: 'ai', 
        content: res.data.answer, 
        sources: res.data.sources 
      };
      
      setMessages(prev => [...prev, aiMsg]);
      fetchHistoryList(studentId); 

    } catch (err) {
      setMessages(prev => [...prev, { role: 'ai', content: "⚠️ I'm having trouble connecting to my brain right now." }]);
    } finally {
      setLoading(false);
    }
  };

  const handleMoodClick = (mood) => {
    const moodPrompts = {
      excited: "I'm feeling excited today! Let's learn something new and challenging.",
      chill: "I'm feeling chill. Can we go over some basics in a relaxed way?",
      focused: "I'm super focused. Give me a complex problem to solve.",
      tired: "I'm a bit tired. Can you explain a concept simply for me?",
      curious: "I'm feeling curious. Tell me a fun fact about this subject.",
      anxious: "I'm feeling anxious about my exams. Can you help me prepare?"
    };
    handleSearch(null, moodPrompts[mood]);
  };

  useEffect(() => {
    // Scroll to bottom whenever messages change
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);


  // --- 4. RENDER STATES ---

  if (authLoading) return <div className="flex h-screen items-center justify-center bg-[#0f0f14] text-white">Loading...</div>;

  if (!isLoggedIn) {
    return (
      <div className="flex flex-col h-screen items-center justify-center bg-[#0f0f14] text-[#ececf1] p-4">
        <div className="bg-[#15151b] p-8 rounded-lg border border-[#4d4d4f] max-w-sm text-center">
          <div className="text-4xl mb-4">🔒</div>
          <h2 className="text-2xl font-bold mb-4">Access Denied</h2>
          <p className="mb-6 text-[#c5c5d2]">Please log in to the main website first.</p>
          <button 
            onClick={() => window.location.href = '/login'}
            className="w-full py-3 bg-[#10a37f] text-white rounded font-bold hover:opacity-90"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  // --- 5. MAIN RENDER ---
  return (
    <div className="flex h-screen w-full bg-[#0f0f14] text-[#ececf1] font-sans overflow-hidden">
      <Head>
        <title>Comfy AI</title>
      </Head>

      {/* SIDEBAR */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-[260px] bg-[#15151b] border-r border-black flex flex-col transition-transform duration-300
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0
      `}>
        <div className="p-2">
          <button 
            onClick={startNewChat}
            className="flex items-center gap-3 w-full p-3 bg-transparent border border-[#555] rounded hover:bg-[#2a2b32] text-sm text-white transition"
          >
            <PlusCircle size={16} /> New Chat
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-2 mt-2">
          <span className="text-xs font-semibold text-[#666] px-2 mb-2 block uppercase">Recent History</span>
          {historyList.length === 0 && <div className="text-sm text-[#666] px-2">No history found.</div>}
          
          {historyList.map((item, idx) => (
            <div 
              key={idx} 
              className={`
                flex items-center gap-3 p-3 rounded cursor-pointer text-sm text-[#c5c5d2] transition mb-1
                ${currentSessionId === item.session_id ? 'bg-[#343541] text-white' : 'hover:bg-[#2a2b32] hover:text-white'}
              `}
              onClick={() => loadChatFromHistory(item)}
            >
              <MessageSquare size={14} className="flex-shrink-0"/>
              <span className="truncate">{item.content}</span>
            </div>
          ))}
        </div>

        <div className="p-3 border-t border-[#444] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#5436da] rounded flex items-center justify-center">
              <User size={14} className="text-white"/>
            </div>
            <span className="font-semibold text-sm truncate max-w-[150px]">{studentId.split('_')[0]}</span>
          </div>
          <button onClick={() => window.location.href = '/useraccount'} className="text-[#888] hover:text-white transition">
            <LogOut size={16} />
          </button>
        </div>
      </aside>

      {/* CHAT AREA - FLEX COLUMN LAYOUT FOR PERFECT SCROLLING */}
      <main className="flex-1 flex flex-col h-full bg-[#0f0f14] relative">
        
        {/* Mobile Header */}
        <div className="md:hidden flex flex-shrink-0 items-center p-3 bg-[#15151b] border-b border-[#444] text-white">
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="mr-3"><Menu size={24}/></button>
          <span className="font-semibold">Comfy AI</span>
        </div>

        {/* MESSAGES SCROLLABLE AREA */}
        <div className="flex-1 overflow-y-auto">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center min-h-full py-10 text-center text-white px-4">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-4xl mb-6 text-black">🤖</div>
              <h2 className="text-3xl font-bold mb-2">Comfy by InstaPreps AI</h2>
              <p className="text-[#c5c5d2] mb-8">Your Confidence Companion!</p>
              
              <p className="mb-6 text-lg">How do you feel today?</p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl">
                 {[
                   { id: 'excited', emoji: '🔥', label: 'Excited', color: 'border-[#ff5959]' },
                   { id: 'chill', emoji: '😎', label: 'Chill', color: 'border-[#5ab3ff]' },
                   { id: 'focused', emoji: '🎯', label: 'Focused', color: 'border-[#ffd633]' },
                   { id: 'tired', emoji: '😴', label: 'Tired', color: 'border-[#b78aff]' },
                   { id: 'curious', emoji: '🤔', label: 'Curious', color: 'border-[#26e68a]' },
                   { id: 'anxious', emoji: '😟', label: 'Anxious', color: 'border-[#ffad66]' }
                 ].map((mood) => (
                   <button 
                    key={mood.id}
                    onClick={() => handleMoodClick(mood.id)}
                    className={`
                      flex flex-col items-center justify-center p-4 bg-[#2a2b32] rounded-xl border-2 border-transparent 
                      hover:bg-[#3a3b43] transition ${mood.color}
                    `}
                   >
                     <span className="text-3xl mb-2">{mood.emoji}</span>
                     <span className="text-sm text-[#dcdce0]">{mood.label}</span>
                   </button>
                 ))}
              </div>
            </div>
          ) : (
            <div className="flex flex-col pb-4">
              {messages.map((msg, i) => (
                <div key={i} className={`w-full py-6 border-b border-black/10 ${msg.role === 'ai' ? 'bg-[#1a1a20]' : 'bg-[#0f0f14]'}`}>
                  <div className="max-w-3xl mx-auto flex gap-4 px-4 md:px-0">
                    <div className={`w-8 h-8 rounded flex items-center justify-center flex-shrink-0 ${msg.role === 'ai' ? 'bg-[#10a37f]' : 'bg-[#5436da]'}`}>
                      {msg.role === 'user' ? <User size={20} /> : <Bot size={20} />}
                    </div>
                    
                    <div className="flex-1 overflow-hidden">
                      {/* MANUAL MARKDOWN STYLING FOR WHITE TEXT */}
                      <ReactMarkdown 
                        remarkPlugins={[remarkGfm]}
                        components={{
                          // FORCE PARAGRAPHS & LISTS TO BE WHITE
                          p: ({node, ...props}) => <p {...props} className="text-[#ececf1] mb-4 last:mb-0 leading-relaxed" />,
                          li: ({node, ...props}) => <li {...props} className="text-[#ececf1] ml-4" />,
                          ul: ({node, ...props}) => <ul {...props} className="list-disc mb-4" />,
                          ol: ({node, ...props}) => <ol {...props} className="list-decimal mb-4" />,
                          strong: ({node, ...props}) => <strong {...props} className="font-bold text-white" />,
                          
                          // LINK STYLING: BRIGHT NEON GREEN (#4ade80)
                          a: ({node, ...props}) => (
                            <a 
                              {...props} 
                              style={{ color: '#4ade80', textDecoration: 'underline' }}
                              className="hover:text-green-300 transition-colors font-semibold"
                              target="_blank" 
                              rel="noopener noreferrer"
                            />
                          )
                        }}
                      >
                        {msg.content}
                      </ReactMarkdown>

                      {/* SOURCES - BRIGHT GREEN */}
                      {msg.role === 'ai' && msg.sources && msg.sources.length > 0 && (
                        <div className="mt-6 pt-4 border-t border-[#333]">
                          <div className="flex items-center gap-2 text-sm font-bold text-[#c5c5d2] mb-3">
                             <BookOpen size={16}/> Reference Material:
                          </div>
                          <div className="flex flex-wrap gap-3">
                            {msg.sources.map((src, idx) => (
                              <a 
                                key={idx} 
                                href={src.url || '#'} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="
                                  flex items-center gap-2 px-3 py-2 rounded-md
                                  bg-[#2a2b32] border border-[#4ade80]
                                  !text-[#4ade80] text-sm font-bold
                                  hover:bg-[#4ade80] hover:text-[#0f0f14]
                                  transition-all
                                "
                              >
                                <ExternalLink size={14} />
                                {src.id ? `Test Link ${src.id}` : 'View Source'}
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {loading && (
                <div className="w-full py-6 bg-[#1a1a20] border-b border-black/10">
                   <div className="max-w-3xl mx-auto flex gap-4 px-4 md:px-0">
                      <div className="w-8 h-8 bg-[#10a37f] rounded flex items-center justify-center">
                        <Bot size={20}/>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75"></span>
                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></span>
                      </div>
                   </div>
                </div>
              )}
              {/* Invisible element to scroll to */}
              <div ref={bottomRef} className="h-4" />
            </div>
          )}
        </div>

        {/* FIXED INPUT AREA AT BOTTOM (NOT ABSOLUTE) */}
        <div className="flex-shrink-0 p-4 bg-[#0f0f14] border-t border-[#333]">
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            <form onSubmit={handleSearch} className="w-full relative flex items-center bg-[#1e1e24] border border-[#555] rounded-xl shadow-lg">
              <input 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Message Comfy..."
                className="flex-1 bg-transparent border-none text-white px-4 py-3 focus:outline-none"
              />
              <button 
                type="submit" 
                disabled={!query.trim() || loading}
                className="p-2 mr-2 text-[#8e8ea0] hover:text-[#10a37f] disabled:opacity-50 disabled:hover:text-[#8e8ea0] transition"
              >
                <Send size={18} />
              </button>
            </form>
            <div className="text-xs text-[#888] mt-2">
              Comfy can make mistakes. Check important info.
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}