import React, { useState, useEffect, useMemo } from 'react';
import { 
  Home, Users, CalendarCheck, Settings, Search, Plus, Bell, 
  BookOpen, GraduationCap, ChevronRight, TrendingUp, UserCheck, 
  UserX, Menu, Lock, User, FileText, CheckSquare, ClipboardList, 
  PenTool, ArrowLeft, Save, LogOut, CheckCircle, MessageSquare, 
  Send, Phone, ShieldCheck, School, MoreVertical
} from 'lucide-react';

const INITIAL_STUDENTS = [
  { id: 1, name: 'Alice Johnson', grade: 'Nursery 2', level: 'Nursery', attendance: '98%', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alice' },
  { id: 2, name: 'Samuel Eto', grade: 'Class 5', level: 'Primary', attendance: '92%', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Samuel' },
  { id: 3, name: 'Marie Curie', grade: 'Upper Sixth', level: 'High School', attendance: '100%', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marie' },
  { id: 4, name: 'John Doe', grade: 'Form 3', level: 'Secondary', attendance: '85%', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John' },
];

const INITIAL_TEACHERS = [
  { id: 101, name: 'Mr. Smith', subject: 'Mathematics', status: 'Present', role: 'Staff' },
  { id: 102, name: 'Mme. Dubois', subject: 'French', status: 'Absent', role: 'Staff' },
  { id: 103, name: 'Mr. Ndi', subject: 'Science', status: 'Pending', role: 'Staff' },
];

const INITIAL_MESSAGES = [
  { id: 1, from: 'Admin', to: 'Parents', text: 'School meeting this Friday at 4 PM.', time: '10:00 AM' },
  { id: 2, from: 'Parent (Alice)', to: 'Admin', text: 'Alice will be late today due to a doctor appointment.', time: '08:30 AM' }
];

const LoginScreen = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const user = username.toLowerCase();
    if (user === 'admin') onLogin({ role: 'admin', name: 'Principal Foncha' });
    else if (user === 'teacher') onLogin({ role: 'teacher', name: 'Mr. Kamga' });
    else if (user === 'parent') onLogin({ role: 'parent', name: 'Mrs. Johnson' });
    else setError('Invalid credentials. Use admin, teacher, or parent');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-br from-blue-600 to-indigo-800 text-white animate-in fade-in duration-500">
      <div className="bg-white/20 backdrop-blur-md p-6 rounded-3xl shadow-2xl mb-8">
        <GraduationCap size={64} strokeWidth={1.5} />
      </div>
      <h1 className="text-4xl font-black mb-2 tracking-tight">EduManage</h1>
      <p className="text-blue-100 mb-10 text-center opacity-80 font-medium">Complete school ecosystem.</p>

      <form onSubmit={handleLogin} className="w-full max-w-sm space-y-4">
        {error && <div className="bg-red-500/20 border border-red-500/50 text-red-100 p-3 rounded-2xl text-sm font-medium animate-bounce">{error}</div>}
        
        <input
          type="text"
          placeholder="Username (admin / teacher / parent)"
          className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-2xl focus:ring-2 focus:ring-white/50 focus:outline-none placeholder-white/50 text-white"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-2xl focus:ring-2 focus:ring-white/50 focus:outline-none placeholder-white/50 text-white"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <button type="submit" className="w-full bg-white text-blue-700 font-bold py-4 rounded-2xl shadow-xl hover:bg-blue-50 active:scale-[0.98] transition-all">
          Enter Portal
        </button>
      </form>
    </div>
  );
};

const Dashboard = ({ user, setTab, logout }) => (
  <div className="p-5 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div className="flex justify-between items-center">
      <div className="flex items-center space-x-3">
        <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg shadow-inner">
          {user.name.charAt(0)}
        </div>
        <div>
          <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">Good Day,</p>
          <h2 className="text-xl font-extrabold text-gray-800">{user.name}</h2>
        </div>
      </div>
      <button onClick={logout} className="p-3 bg-gray-100 text-gray-500 rounded-2xl hover:bg-red-50 hover:text-red-600 transition-colors">
        <LogOut size={20} />
      </button>
    </div>

    <div className="grid grid-cols-2 gap-4">
      <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-3xl p-5 shadow-lg shadow-blue-200">
        <p className="text-blue-100 text-xs font-semibold uppercase tracking-widest mb-1">Total Students</p>
        <h2 className="text-3xl font-black">1,248</h2>
        <div className="flex items-center mt-3 text-blue-200 text-[10px] font-bold">
          <TrendingUp size={12} className="mr-1" /> 4% Increase
        </div>
      </div>
      <div className="bg-white border border-gray-100 rounded-3xl p-5 shadow-sm">
        <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-1">Staff Onsite</p>
        <h2 className="text-3xl font-black text-gray-800">42<span className="text-sm text-gray-300">/45</span></h2>
        <div className="mt-3 bg-green-50 text-green-600 text-[10px] font-bold py-1 px-2 rounded-lg w-fit">
          High Attendance
        </div>
      </div>
    </div>

    <div>
      <h3 className="text-sm font-bold text-gray-400 uppercase mb-4 tracking-widest">School Management</h3>
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: 'Attendance', icon: CalendarCheck, color: 'text-orange-600', bg: 'bg-orange-50', tab: user.role === 'admin' ? 'staff' : 'academics' },
          { label: 'Exams', icon: BookOpen, color: 'text-purple-600', bg: 'bg-purple-50', tab: 'academics' },
          { label: 'Link', icon: MessageSquare, color: 'text-blue-600', bg: 'bg-blue-50', tab: 'comms' }
        ].map((action, i) => (
          <button 
            key={i} 
            onClick={() => setTab(action.tab)}
            className="flex flex-col items-center justify-center p-4 bg-white border border-gray-50 rounded-3xl hover:shadow-md transition-shadow active:scale-95"
          >
            <div className={`${action.bg} ${action.color} p-3 rounded-2xl mb-2`}>
              <action.icon size={24} />
            </div>
            <span className="text-[10px] font-bold text-gray-600 uppercase tracking-tighter">{action.label}</span>
          </button>
        ))}
      </div>
    </div>

    <div className="bg-indigo-50 border border-indigo-100 p-5 rounded-3xl flex items-center shadow-sm">
      <div className="bg-indigo-600 text-white p-3 rounded-2xl mr-4">
        <Bell size={20} />
      </div>
      <div className="flex-1">
        <p className="text-xs font-bold text-indigo-900">Term 2 Results Ready</p>
        <p className="text-[10px] text-indigo-600 leading-tight mt-1">Nursery & Primary report cards are pending approval.</p>
      </div>
      <ChevronRight size={18} className="text-indigo-400" />
    </div>
  </div>
);

const AcademicsView = ({ students, exams, setExams }) => {
  const [activeSubTab, setActiveSubTab] = useState('list');
  const [newExam, setNewExam] = useState({ title: '', subject: '', level: 'Secondary', questions: [''] });

  if (activeSubTab === 'create') return (
    <div className="p-5 animate-in slide-in-from-right duration-300 pb-24">
      <div className="flex items-center mb-6">
        <button onClick={() => setActiveSubTab('list')} className="mr-3 p-3 bg-white shadow-sm rounded-2xl text-gray-400"><ArrowLeft size={20}/></button>
        <h2 className="text-xl font-black text-gray-800">Set Exam Paper</h2>
      </div>
      <div className="space-y-4">
        <input 
          type="text" placeholder="Exam Name" 
          className="w-full p-4 bg-white border border-gray-100 rounded-2xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none" 
          onChange={e => setNewExam({...newExam, title: e.target.value})} 
        />
        <div className="flex gap-3">
          <select className="flex-1 p-4 bg-white border border-gray-100 rounded-2xl shadow-sm" onChange={e => setNewExam({...newExam, level: e.target.value})}>
            <option>Nursery</option><option>Primary</option><option>Secondary</option><option>High School</option>
          </select>
          <input type="text" placeholder="Subject" className="flex-1 p-4 bg-white border border-gray-100 rounded-2xl shadow-sm" onChange={e => setNewExam({...newExam, subject: e.target.value})}/>
        </div>
        <h3 className="font-bold text-gray-400 uppercase text-xs tracking-widest mt-6">Question 1</h3>
        <textarea className="w-full p-4 bg-white border border-gray-100 rounded-2xl shadow-sm min-h-[120px]" placeholder="Type your exam question here..." />
        <button className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold shadow-lg" onClick={() => setActiveSubTab('list')}>Save Exam Paper</button>
      </div>
    </div>
  );

  return (
    <div className="p-5 animate-in fade-in duration-300 pb-24">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-black text-gray-800">Academic Hub</h2>
        <button onClick={() => setActiveSubTab('create')} className="p-3 bg-blue-600 text-white rounded-2xl shadow-md"><Plus size={20} /></button>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-8">
        <button onClick={() => setActiveSubTab('create')} className="bg-blue-50 p-6 rounded-3xl border border-blue-100">
          <PenTool className="text-blue-600 mb-2 mx-auto" size={32} />
          <span className="text-xs font-bold text-blue-700 block text-center uppercase tracking-tighter">Set Exam</span>
        </button>
        <button className="bg-green-50 p-6 rounded-3xl border border-green-100">
          <CheckSquare className="text-green-600 mb-2 mx-auto" size={32} />
          <span className="text-xs font-bold text-green-700 block text-center uppercase tracking-tighter">Register Marks</span>
        </button>
      </div>
      <h3 className="font-bold text-gray-400 uppercase text-[10px] tracking-widest mb-4">Latest Term Exams</h3>
      {exams.length === 0 && <div className="text-center py-8 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200 text-gray-400 text-xs font-medium italic">No exams recorded for this term.</div>}
    </div>
  );
};

const CommunicationView = ({ user, messages, setMessages }) => {
  const [text, setText] = useState('');
  const handleSend = () => {
    if (!text) return;
    const newMessage = {
      id: Date.now(),
      from: user.role === 'admin' ? 'Admin' : 'Parent',
      text: text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages([...messages, newMessage]);
    setText('');
  };

  return (
    <div className="flex flex-col h-full animate-in fade-in duration-300 bg-white">
      <div className="p-5 border-b border-gray-100 sticky top-0 z-10 bg-white/90 backdrop-blur-md">
        <h2 className="text-xl font-black text-gray-800">School Link</h2>
        <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Connect with Administration</p>
      </div>
      <div className="flex-1 overflow-y-auto p-5 space-y-4 pb-32">
        {messages.map(msg => (
          <div key={msg.id} className={`flex flex-col ${msg.from === 'Admin' ? 'items-start' : 'items-end'}`}>
            <div className={`max-w-[85%] p-4 rounded-3xl shadow-sm ${msg.from === 'Admin' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800'}`}>
              <div className="flex justify-between items-center mb-1 space-x-4">
                <span className="text-[9px] font-black uppercase tracking-tighter opacity-70">{msg.from}</span>
                <span className="text-[9px] font-bold opacity-60">{msg.time}</span>
              </div>
              <p className="text-sm font-medium leading-relaxed">{msg.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-20 left-0 right-0 p-4 bg-white/80 backdrop-blur-md border-t border-gray-100">
        <div className="flex items-center space-x-2">
          <input 
            type="text" placeholder="Type a message..." 
            className="flex-1 p-4 bg-gray-50 rounded-2xl outline-none text-sm border border-transparent focus:border-blue-200"
            value={text} onChange={e => setText(e.target.value)}
          />
          <button onClick={handleSend} className="p-4 bg-blue-600 text-white rounded-2xl shadow-lg shadow-blue-200"><Send size={20} /></button>
        </div>
      </div>
    </div>
  );
};

const DirectoryView = ({ list, type, onStatusChange }) => (
  <div className="p-5 pb-24 animate-in fade-in duration-300">
    <div className="flex justify-between items-center mb-6">
      <div>
        <h2 className="text-2xl font-black text-gray-800 tracking-tight">{type === 'staff' ? 'Staff' : 'Student'} Hub</h2>
        <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Live Supervision</p>
      </div>
      <button className="p-3 bg-white border border-gray-100 text-gray-600 rounded-2xl shadow-sm"><Search size={20}/></button>
    </div>
    <div className="space-y-3">
      {list.map(item => (
        <div key={item.id} className="bg-white p-4 rounded-3xl shadow-sm border border-gray-50 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img src={item.image || `https://api.dicebear.com/7.x/initials/svg?seed=${item.name}`} className="h-12 w-12 rounded-2xl border-2 border-gray-50" alt="" />
            <div>
              <h4 className="font-bold text-gray-800 text-sm">{item.name}</h4>
              <p className="text-[9px] text-gray-400 font-black uppercase tracking-tighter">{item.grade || item.subject} • {item.level || 'Staff'}</p>
            </div>
          </div>
          <div className="flex space-x-1">
            <button onClick={() => onStatusChange(item.id, 'Present')} className={`p-2 rounded-xl transition-all ${item.status === 'Present' ? 'bg-green-600 text-white shadow-md' : 'bg-gray-50 text-gray-300'}`}><UserCheck size={16} /></button>
            <button onClick={() => onStatusChange(item.id, 'Absent')} className={`p-2 rounded-xl transition-all ${item.status === 'Absent' ? 'bg-red-600 text-white shadow-md' : 'bg-gray-50 text-gray-300'}`}><UserX size={16} /></button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ParentPortal = ({ user, logout, students, messages }) => (
  <div className="p-5 space-y-6 animate-in fade-in duration-500 pb-24">
    <div className="flex justify-between items-center">
      <h2 className="text-2xl font-black text-gray-800">Child Portal</h2>
      <button onClick={logout} className="p-3 bg-gray-100 rounded-2xl"><LogOut size={20} /></button>
    </div>
    <div className="bg-gradient-to-br from-indigo-600 to-blue-700 rounded-3xl p-6 text-white shadow-xl">
      <p className="text-indigo-100 text-[10px] font-bold uppercase tracking-widest mb-2">Primary Student</p>
      <div className="flex items-center space-x-4">
        <img src={students[0].image} className="h-16 w-16 rounded-2xl border-2 border-white/20 shadow-lg" alt=""/>
        <div>
          <h3 className="text-xl font-black">{students[0].name}</h3>
          <p className="text-sm opacity-80 font-medium">{students[0].grade} • Grade: A-</p>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-3 border-t border-white/10 pt-4">
        <div className="text-center"><p className="text-xs text-white/60">Attendance</p><p className="font-bold">98%</p></div>
        <div className="text-center"><p className="text-xs text-white/60">Fees Status</p><p className="font-bold">Paid</p></div>
      </div>
    </div>
    <h3 className="font-bold text-gray-400 uppercase text-[10px] tracking-widest mb-2 mt-4">Academic Reports</h3>
    <button className="w-full p-5 bg-white border border-gray-100 rounded-3xl flex items-center justify-between shadow-sm active:scale-95 transition-transform">
      <div className="flex items-center"><div className="p-3 bg-blue-50 text-blue-600 rounded-2xl mr-4"><FileText size={20}/></div><div className="text-left"><p className="font-bold text-sm">Term 1 Report Card</p><p className="text-xs text-gray-400">Published Jan 12</p></div></div>
      <ChevronRight size={20} className="text-gray-300"/>
    </button>
  </div>
);

export default function App() {
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState('home');
  const [teachers, setTeachers] = useState(INITIAL_TEACHERS);
  const [students, setStudents] = useState(INITIAL_STUDENTS);
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [exams, setExams] = useState([]);

  const handleStatusChange = (id, newStatus) => {
    setTeachers(teachers.map(t => t.id === id ? {...t, status: newStatus} : t));
  };

  const logout = () => { setUser(null); setActiveTab('home'); };

  if (!user) return <LoginScreen onLogin={setUser} />;

  const renderContent = () => {
    if (user.role === 'parent') {
      if (activeTab === 'comms') return <CommunicationView user={user} messages={messages} setMessages={setMessages} />;
      return <ParentPortal user={user} logout={logout} students={students} messages={messages} />;
    }
    switch (activeTab) {
      case 'home': return <Dashboard user={user} setTab={setActiveTab} logout={logout} />;
      case 'staff': return <DirectoryView list={teachers} type="staff" onStatusChange={handleStatusChange} />;
      case 'students': return <DirectoryView list={students} type="student" onStatusChange={() => {}} />;
      case 'academics': return <AcademicsView students={students} exams={exams} setExams={setExams} />;
      case 'reports': return <div className="p-5"><h2 className="text-2xl font-black mb-6">Report Cards</h2><p className="text-gray-400 text-sm">Select a student from the directory to edit marks.</p></div>;
      case 'comms': return <CommunicationView user={user} messages={messages} setMessages={setMessages} />;
      default: return <Dashboard user={user} setTab={setActiveTab} logout={logout} />;
    }
  };

  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'staff', icon: ShieldCheck, label: 'Staff', role: 'admin' },
    { id: 'students', icon: Users, label: 'Users', role: 'admin' },
    { id: 'academics', icon: BookOpen, label: 'Study', role: 'teacher' },
    { id: 'reports', icon: FileText, label: 'Reports', role: 'teacher' },
    { id: 'comms', icon: MessageSquare, label: 'Link' },
  ].filter(item => !item.role || item.role === user.role);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-900 selection:bg-blue-100">
      <div className="max-w-md mx-auto w-full bg-white min-h-screen relative shadow-2xl md:my-4 md:rounded-[3rem] md:overflow-hidden md:h-[844px] flex flex-col border border-gray-100">
        {/* Device Status Bar Simulation */}
        <div className="h-10 shrink-0 flex items-center justify-between px-8 pt-2">
          <span className="text-xs font-bold">9:41</span>
          <div className="flex space-x-1.5 items-center">
            <div className="w-4 h-4 rounded-full bg-black/5 flex items-center justify-center"><Phone size={10} /></div>
            <div className="w-6 h-3 rounded-md bg-black/10"></div>
          </div>
        </div>
        
        <main className="flex-1 overflow-y-auto hide-scrollbar">
          {renderContent()}
        </main>

        {/* Bottom Navigation */}
        <nav className="shrink-0 bg-white/80 backdrop-blur-xl border-t border-gray-100 pb-8 pt-3 px-6 z-50">
          <div className="flex justify-between items-center">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button 
                  key={item.id} 
                  onClick={() => setActiveTab(item.id)} 
                  className={`flex flex-col items-center transition-all duration-300 ${isActive ? 'text-blue-600 scale-110' : 'text-gray-300'}`}
                >
                  <div className={`p-2 rounded-2xl ${isActive ? 'bg-blue-50' : ''}`}>
                    <item.icon size={22} strokeWidth={isActive ? 2.5 : 2} />
                  </div>
                  {isActive && <span className="text-[9px] font-black mt-1 uppercase tracking-tighter">{item.label}</span>}
                </button>
              );
            })}
          </div>
        </nav>
      </div>
      
      {/* GLOBAL STYLES */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        body { font-family: 'Plus Jakarta Sans', sans-serif; }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
}
