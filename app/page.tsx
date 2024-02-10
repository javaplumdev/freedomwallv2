import Login from '@/modules/login/Login';
import Footer from '@/components/footer/Footer';

export default function Home() {
  return (
    <main className="flex flex-col items-center p-3 h-100">
      <Login />
      <Footer />
    </main>
  );
}
