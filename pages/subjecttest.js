import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
 import Header from "src/components/header";
 import { BallTriangle } from 'react-loader-spinner';
import { Clock, BookOpen,Eye,Heart } from "lucide-react"; 
import VerticalSidebar from "src/components/VerticalSidebar";

export default function SubjectTests() {
  const [tests, setTests] = useState([]);
  const [subjectName, setSubjectName] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { subject_id} = router.query;

  // const colors = ["#d92a27", "#4682b4", "#47c068", "#b0c4de", "#f4a261"];

  // Fetch tests for the selected subject
  const fetchTests = async (subjectId,) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/testlist_by_subject/${subjectId}`
      );
      setTests(response.data.data);
    } catch (err) {
      setError(err.message);
      console.error("Error fetching tests:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {

    try {
      // Retrieve and parse localStorage data
      const storedData = JSON.parse(localStorage.getItem("subject_ids")) || [];
      console.log("Local Storage Data:", storedData);

      if (subject_id) {
        fetchTests(subject_id);
        console.log("Fetching tests for subject_id:", subject_id);

        // Find subject name from array
        const foundSubject = storedData.find(
          (subject) => subject.id === Number(subject_id)
        );

        if (foundSubject) {
          setSubjectName(foundSubject.name);
        }
      }
    } catch (error) {
      console.error("Error parsing localStorage data:", error);
    }
  }, [subject_id]);


  return (
    <>
    {/* <Header/> */}
    <VerticalSidebar/>
    {loading && (
      <div
        className='fixed inset-0 z-10 overflow-y-auto'
        aria-labelledby='modal-title'
        role='dialog'
        aria-modal='true'
      >
        <div className=''>
          <div className='fixed inset-0 transition-opacity bg-gray-800 bg-opacity-75' aria-hidden='true' />
    
          <div className='flex justify-center w-full h-screen items-center'>
            <BallTriangle color='#E93F36' height={160} width={160} ariaLabel='loading' />
          </div>
        </div>
      </div>
    )}
    
    <div className="container mx-auto p-6">
      {/* Back Button */}
      <Link href="/confidencetest">
        <img
          src="/images/PrevArr.png"
          width={30}
          height={30}
          className="mt-5 cursor-pointer"
          alt="Back"
        />
       
      </Link>
      <br></br>


      {/* Subject Title */}
      {/* <h1 className="text-3xl font-bold mb-6 mt-8">
        {subjectName ? `Tests for ${subjectName}` : "Tests for Subject"}
      </h1> */}
    
      {/* Error Handling and Tests Display */}
      {/* {error ? (
        <p className="text-red-500">Error: {error}</p>
      ) : tests.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {tests.map((test, index) => (
            <div
              key={test.id}
              className="p-4 border rounded-lg shadow-md hover:shadow-lg transition text-white"
              style={{ backgroundColor: "#f6f6f6" }}
            >
              <h3 className="font-bold text-xl text-black">{test.test_name}</h3>
    
              <strong className="text-sm text-blue-400 font-semibold">
                Duration: {test.duration} minutes
              </strong>
              <p className="text-sm text-gray-500">{test.description}</p>
              <div className="flex justify-center">
                <button
                  onClick={() => router.push(`/instapreps_mocktest/test?id=${test.id}`)}
                  className="mt-5 bg-white text-blue-500 px-4 py-2 rounded-lg hover:bg-gray-200  w-[70%]"
                >
                  Start Test
                </button>
              </div>
            </div> */}
          {/* ))} */}
        {/* </div> */}
      {/* ) : (
        <p className="text-gray-600"></p>
      )} */}


 <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
  {tests.map((test) => (
    <div
      key={test.id}
      className="relative group p-6 rounded-2xl shadow-lg bg-gradient-to-br from-blue-50 to-indigo-100 hover:from-indigo-50 hover:to-blue-100 transition-all duration-300 border border-gray-200"
    >
       {/* <button
        className="absolute top-3 right-3 p-2 rounded-full bg-white border border-gray-300 shadow-sm hover:bg-gray-100 transition"
        onClick={() => alert(`You liked ${test.test_name}`)}
      >
        <Heart className="w-5 h-5 text-grey-500" />
      </button> */}
      {/* Title */}
      <h3 className="font-bold text-xl text-gray-800 flex items-center gap-2">
        <BookOpen className="w-5 h-5 text-indigo-600" />
        {test.test_name}
      </h3>

      {/* Duration */}
      <div className="flex items-center mt-3 text-gray-600 text-sm font-medium">
        <Clock className="w-4 h-4 mr-2 text-blue-500" />
        Duration: {test.duration} minutes
      </div>
    
      {/* <div className="flex items-center mt-2 text-gray-600 text-sm font-medium">
        <Eye className="w-4 h-4 mr-2 text-indigo-500" />
        {test.views} Views
      </div> */}


      {/* Description */}
      <p className="text-sm text-gray-500 mt-2">{test.description}</p>

      {/* Start Test Button */}
      <div className="flex justify-center">
        <button
          onClick={() => router.push(`/instapreps_mocktest/test?id=${test.id}`)}
          className="mt-5 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full"
        >
          Start Test
        </button>
      </div>

      {/* Glow on Hover */}
      <span className="absolute inset-0 rounded-2xl ring-2 ring-transparent group-hover:ring-indigo-300 transition duration-300 pointer-events-none"></span>
    </div>
  ))}
</div>

    </div>
    </>
  )
}
              
