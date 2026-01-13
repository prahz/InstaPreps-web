import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Header from 'src/components/header';
import Footer from 'src/components/footer';

const countries = [
  'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Argentina', 'Armenia', 'Australia', 'Austria',
  'Bangladesh', 'Belgium', 'Bhutan', 'Brazil', 'Bulgaria', 'Canada', 'China', 'Croatia', 'Cyprus', 'Czech Republic',
  'Denmark', 'Egypt', 'Estonia', 'Finland', 'France', 'Germany', 'Greece', 'Hungary', 'Iceland', 'India', 'Indonesia',
  'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Japan', 'Kenya', 'Kuwait', 'Latvia', 'Lithuania', 'Luxembourg',
  'Malaysia', 'Maldives', 'Mexico', 'Monaco', 'Nepal', 'Netherlands', 'New Zealand', 'Nigeria', 'Norway', 'Oman',
  'Pakistan', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia', 'Saudi Arabia', 'Singapore',
  'Slovakia', 'Slovenia', 'South Africa', 'South Korea', 'Spain', 'Sri Lanka', 'Sweden', 'Switzerland', 'Thailand',
  'Turkey', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Vietnam', 'Zimbabwe'
].sort();

const workTypes = [
  'Student', 'Engineering', 'Teacher', 'Doctor', 'Business',
  'Researcher', 'Freelancer', 'Other'
];

const UserDashboard = () => {
  const [data, setData] = useState(null);
  const [profilePic, setProfilePic] = useState(null);
  const [tempPic, setTempPic] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [showPicModal, setShowPicModal] = useState(false);
  const [formData, setFormData] = useState({});

  // LinkedIn-style Editor States
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);

  const router = useRouter();

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = process.env.NEXT_PUBLIC_LOGOUT_REDIRECT_URL || '/';
  };

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const imageUrl = URL.createObjectURL(file);
      setTempPic(imageUrl);
      setZoom(1);
      setRotation(0);
    }
  };

  const handleSaveImage = async () => {
    const studentId = data?.id || data?.student_id;

    if (!selectedFile || !studentId) {
      alert('Missing file or Student ID.');
      return;
    }

    const apiData = new FormData();
    apiData.append('id', studentId);
    apiData.append('file', selectedFile);

    try {
      const response = await fetch('/api/proxy/student/profile_pic', {
        method: 'POST',
        body: apiData,
      });

      if (response.ok) {
        const result = await response.json();
        const serverUrl = result.data?.url || tempPic;

        setProfilePic(serverUrl);
        setTempPic(null);
        setSelectedFile(null);
        setShowPicModal(false);

        const updatedData = { ...data, profilePic: serverUrl };
        setData(updatedData);
        localStorage.setItem('user', JSON.stringify(updatedData));
        alert('Profile picture updated successfully!');
      } else {
        alert(`Server Error: ${response.status}`);
      }
    } catch (error) {
      alert('Network error. Please try again.');
    }
  };

  const handleRemoveImage = () => {
    if (window.confirm('Are you sure you want to remove your profile photo?')) {
      setProfilePic(null);
      setTempPic(null);
      setSelectedFile(null);
      setShowPicModal(false);
      const updatedData = { ...data };
      delete updatedData.profilePic;
      setData(updatedData);
      localStorage.setItem('user', JSON.stringify(updatedData));
    }
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      router.push('/login');
    } else {
      const userData = JSON.parse(storedUser);
      setData(userData);
      setFormData(userData);
      setProfilePic(userData.profilePic || null);
    }
  }, [router]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    localStorage.setItem('user', JSON.stringify(formData));
    setData(formData);
    setIsEditing(false);
  };

  return (
    <div className='min-h-screen bg-gray-50 text-gray-900'>
      <Header />
      <div className='flex w-[95%] max-w-6xl mx-auto mt-8 gap-6'>
        {/* Sidebar */}
        <aside className='w-1/4 bg-white rounded-lg shadow p-6 flex flex-col items-center'>
          <div
            className='relative cursor-pointer group'
            onClick={() => setShowPicModal(true)}
          >
            <img
              src={profilePic || '/images/defaultAvatar.png'}
              alt='Profile'
              className='w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover transition duration-200 group-hover:brightness-75'
            />
            <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity'>
              <span className='text-white text-xs font-bold bg-black/40 px-2 py-1 rounded'>Edit Photo</span>
            </div>
          </div>

          <h2 className='mt-4 font-bold text-lg'>{data?.first_name} {data?.last_name}</h2>

          <div className='w-full mt-6 p-4 rounded-2xl bg-white/20 backdrop-blur-lg border border-white/30 shadow-lg'>
            <h3 className='text-sm font-semibold text-gray-700 mb-3'>Quick Links</h3>
            <nav className='flex flex-col gap-3'>
              <Link href='/lasttestsreports' className='flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium bg-white/30 shadow-md transition-colors duration-300 hover:bg-white/40 hover:shadow-lg'>📊 Confidence Report</Link>
              <Link href='/confidencecheckup' className='flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium bg-white/30 shadow-md transition-colors duration-300 hover:bg-white/40 hover:shadow-lg'>✅ Scheduled Checkup</Link>
            </nav>
          </div>

          <button onClick={handleLogout} className='bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg text-sm font-medium shadow-md mt-4 w-full'>Logout</button>
        </aside>

        {/* Main Content */}
        <main className='flex-1 bg-white rounded-lg shadow p-6'>
          {data ? (
            <>
              <div className='flex justify-between items-center mb-4 border-b pb-2'>
                <h2 className='text-xl font-semibold'>Personal Information</h2>
                <button onClick={() => setIsEditing(true)} className='bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-4 py-1 rounded-lg shadow-md transition text-sm flex items-center gap-2'>✏️ Edit Info</button>
              </div>

              <div className='grid grid-cols-3 gap-4 text-gray-700'>
                <p><span className='font-semibold'>First Name:</span> {data.first_name || '—'}</p>
                <p><span className='font-semibold'>Middle Name:</span> {data.middle_name || '—'}</p>
                <p><span className='font-semibold'>Last Name:</span> {data.last_name || '—'}</p>
              </div>

              <div className='grid grid-cols-3 gap-4 text-gray-700 mt-4'>
                <p><span className='font-semibold'>Gender:</span> {data.gender || '—'}</p>
                <p><span className='font-semibold'>Country:</span> {data.country || '—'}</p>
                <p><span className='font-semibold'>Date of Birth:</span> {data.dob || '—'}</p>
              </div>

              <div className='grid grid-cols-2 gap-4 text-gray-700 mt-4'>
                <p><span className='font-semibold'>Type of Work/Study:</span> {data.work_type || '—'}</p>
                <p><span className='font-semibold'>Email:</span> {data.email_address || '—'}</p>
              </div>

              <div className='grid grid-cols-2 gap-4 text-gray-700 mt-4'>
                <p><span className='font-semibold'>Mobile:</span> {data.mobile || '—'}</p>
                <p><span className='font-semibold'>Coins earned:</span> {data.coins_earned || '0'}</p>
                <p><span className='font-semibold'>Coins left:</span> {data.coins_left || '0'}</p>
              </div>

              <h2 className='text-xl font-semibold mt-8 mb-4 border-b pb-2'>Quick Actions</h2>
              <div className='flex gap-6'>
                <Link href='/lasttestsreports' className='bg-blue-50 hover:bg-blue-100 flex-1 p-6 rounded-lg text-center shadow transition'>
                  <img src='images/analysis.png' alt='Report' className='w-14 h-14 mx-auto mb-3' />
                  <p className='font-medium'>Confidence Checkup Report</p>
                </Link>
                <Link href='/confidencetest' className='bg-green-50 hover:bg-green-100 flex-1 p-6 rounded-lg text-center shadow transition'>
                  <img src='images/analysis1.png' alt='Checkup' className='w-14 h-14 mx-auto mb-3' />
                  <p className='font-medium'>Scheduled Checkup</p>
                </Link>
              </div>
            </>
          ) : (
            <p className='text-gray-500'>Loading user data...</p>
          )}
        </main>
      </div>

      {/* Profile Picture LinkedIn-Style Modal */}
      {showPicModal && (
        <div className='fixed inset-0 bg-black/80 flex items-center justify-center z-[60] p-4'>
          <div className='bg-[#1d2226] text-white rounded-xl max-w-lg w-full overflow-hidden shadow-2xl'>
            <div className='flex justify-between items-center p-4 border-b border-gray-700'>
              <h3 className='text-xl font-medium'>Profile photo</h3>
              <button
                onClick={() => {
                  setShowPicModal(false);
                  setTempPic(null);
                }}
                className='text-gray-400 hover:text-white text-2xl'
              >
                ✕
              </button>
            </div>

            <div className='p-12 flex flex-col items-center bg-[#1d2226]'>
              {/* Image Container with Overflow Hidden for Editor Effect */}
              <div className='w-64 h-64 rounded-full overflow-hidden border-4 border-gray-600 shadow-inner flex items-center justify-center bg-black'>
                <img
                  src={tempPic || profilePic || '/images/defaultAvatar.png'}
                  style={{
                    transform: `scale(${zoom}) rotate(${rotation}deg)`,
                    transition: 'transform 0.1s ease-out'
                  }}
                  className='w-full h-full object-cover'
                  alt='Preview'
                />
              </div>

              {/* Editor Controls */}
              {tempPic && (
                <div className='w-full mt-8 space-y-4'>
                  <div className='flex items-center gap-4'>
                    <span className='text-xs text-gray-400 w-12'>Zoom</span>
                    <input
                      type='range'
                      min='1'
                      max='3'
                      step='0.1'
                      value={zoom}
                      onChange={(e) => setZoom(e.target.value)}
                      className='flex-1 accent-blue-500 h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer'
                    />
                  </div>
                  <div className='flex items-center gap-4'>
                    <span className='text-xs text-gray-400 w-12'>Rotate</span>
                    <input
                      type='range'
                      min='-180'
                      max='180'
                      step='1'
                      value={rotation}
                      onChange={(e) => setRotation(e.target.value)}
                      className='flex-1 accent-blue-500 h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer'
                    />
                  </div>
                </div>
              )}
            </div>

            <div className='p-6 bg-[#1d2226] flex flex-wrap gap-4 justify-between border-t border-gray-700'>
              <div className='flex gap-4'>
                <label className='cursor-pointer flex flex-col items-center group'>
                  <span className='text-gray-400 group-hover:text-white text-sm'>📷 {tempPic ? 'Change' : 'Edit'}</span>
                  <input type='file' accept='image/*' onChange={handleImageUpload} className='hidden' />
                </label>
                {profilePic && !tempPic && (
                  <button onClick={handleRemoveImage} className='flex flex-col items-center group text-gray-400 hover:text-red-400'>
                    <span className='text-sm'>🗑️ Delete</span>
                  </button>
                )}
              </div>

              <div className='flex gap-3'>
                {tempPic && (
                  <button
                    onClick={handleSaveImage}
                    className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-bold transition'
                  >
                    Save Photo
                  </button>
                )}
                <button
                  onClick={() => {
                    setShowPicModal(false);
                    setTempPic(null);
                  }}
                  className='border border-white text-white px-6 py-2 rounded-full font-bold hover:bg-white/10 transition'
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal for Editing Personal Info */}
      {isEditing && (
        <div className='fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50'>
          <div className='bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl'>
            <h2 className='text-lg font-semibold mb-4 text-purple-600'>Edit Personal Information</h2>
            <div className='grid grid-cols-2 gap-4'>
              <div className='flex flex-col'>
                <label className='text-sm text-gray-600 mb-1'>First Name</label>
                <input name='first_name' value={formData.first_name || ''} onChange={handleChange} className='border p-2 rounded text-black' />
              </div>
              <div className='flex flex-col'>
                <label className='text-sm text-gray-600 mb-1'>Middle Name</label>
                <input name='middle_name' value={formData.middle_name || ''} onChange={handleChange} className='border p-2 rounded text-black' />
              </div>
              <div className='flex flex-col'>
                <label className='text-sm text-gray-600 mb-1'>Last Name</label>
                <input name='last_name' value={formData.last_name || ''} onChange={handleChange} className='border p-2 rounded text-black' />
              </div>
              <div className='flex flex-col'>
                <label className='text-sm text-gray-600 mb-1'>Gender</label>
                <select name='gender' value={formData.gender || ''} onChange={handleChange} className='border p-2 rounded bg-white text-black'>
                  <option value=''>Select Gender</option>
                  <option value='Male'>Male</option>
                  <option value='Female'>Female</option>
                  <option value='Other'>Other</option>
                </select>
              </div>
              <div className='flex flex-col'>
                <label className='text-sm text-gray-600 mb-1'>Country</label>
                <select name='country' value={formData.country || ''} onChange={handleChange} className='border p-2 rounded bg-white text-black'>
                  <option value=''>Select Country</option>
                  {countries.map((c) => (<option key={c} value={c}>{c}</option>))}
                </select>
              </div>
              <div className='flex flex-col'>
                <label className='text-sm text-gray-600 mb-1'>Date of Birth</label>
                <input name='dob' type='date' value={formData.dob || ''} onChange={handleChange} className='border p-2 rounded text-black cursor-pointer w-full' />
              </div>
              <div className='flex flex-col'>
                <label className='text-sm text-gray-600 mb-1'>Work/Study Type</label>
                <select name='work_type' value={formData.work_type || ''} onChange={handleChange} className='border p-2 rounded bg-white text-black'>
                  <option value=''>Select Work/Study Type</option>
                  {workTypes.map((w) => (<option key={w} value={w}>{w}</option>))}
                </select>
              </div>
              <div className='flex flex-col'>
                <label className='text-sm text-gray-600 mb-1'>Mobile</label>
                <input name='mobile' value={formData.mobile || ''} onChange={handleChange} className='border p-2 rounded text-black' />
              </div>
            </div>
            <div className='flex justify-end gap-3 mt-6'>
              <button onClick={() => setIsEditing(false)} className='px-4 py-2 rounded bg-gray-300 hover:bg-gray-400'>Cancel</button>
              <button onClick={handleSave} className='px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600'>Save</button>
            </div>
          </div>
        </div>
      )}
      <div className='mt-12'><Footer /></div>
    </div>
  );
};

export default UserDashboard;