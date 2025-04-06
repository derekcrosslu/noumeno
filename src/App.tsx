
import './App.css'


function App() {
  return (
    <div className='relative w-screen h-screen overflow-hidden'>
      <img
        src='./fondo.gif'
        className='absolute top-0 left-0 w-screen h-full object-contain'
        alt='Background'
      />
      <div className='absolute inset-0 flex justify-center items-center z-10 '>
      <img src='./noumeno_logo.svg' />
      </div>
    </div>
  );
}


export default App
