import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react'; 

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="w-full bg-primary text-white flex items-center justify-between p-4 shadow-md">
      <button onClick={() => navigate(-1)} className="p-1">
        <ArrowLeft className="w-6 h-6" />
      </button>
      <h1 className="text-xl font-display tracking-wide">Price Checker</h1>
      <div className="w-6 h-6" /> {}
    </header>
  );
}