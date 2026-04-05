export const Loading = () => {
  return (
    <div className="bg-[#f3f4f6] bg-dots min-h-screen flex flex-col items-center justify-center font-bold text-black overflow-hidden">
      <style>{`
        .bg-dots {
          background-image: radial-gradient(#d1d5db 2px, transparent 2px);
          background-size: 30px 30px;
        }

        .squiggly-line {
          background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 4"><path d="M0 3.5c5 0 5-3 10-3s5 3 10 3" fill="none" stroke="%235B92FF" stroke-width="1.5"/></svg>') repeat-x bottom;
          background-size: 15px 4px;
          padding-bottom: 6px;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(-2deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        @keyframes character-jump {
          0%, 100% { transform: translateY(0) scale(1, 1); }
          50% { transform: translateY(-20px) scale(1.1, 0.9); }
        }
        .animate-jump {
          animation: character-jump 0.6s infinite alternate ease-in-out;
        }

        @keyframes loading-bar {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .loading-fill {
          animation: loading-bar 3s infinite ease-in-out;
        }
      `}</style>

      <div className="relative animate-float">
        <div className="absolute inset-0 bg-black translate-x-3 translate-y-3 rounded-[40px]" />

        <div className="relative bg-white border-4 border-black rounded-[40px] p-10 md:p-14 flex flex-col items-center w-86 md:w-125">
          <div className="relative mb-10">
            <div className="w-24 h-24 bg-[#00D26A] border-[5px] border-black rounded-2xl flex flex-col items-center justify-center animate-jump shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex gap-4 mb-2">
                <div className="w-3 h-3 bg-black rounded-full" />
                <div className="w-3 h-3 bg-black rounded-full" />
              </div>
              <div className="w-8 h-2 bg-black rounded-full" />
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-2 bg-black/10 rounded-full" />
          </div>

          <div className="flex flex-col items-center gap-3 mb-8">
            <div className="flex items-center gap-2">
              <span className="text-3xl md:text-4xl">正在</span>
              <div className="bg-[#FF85A2] border-[3px] border-black px-4 py-1 -rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="text-white text-3xl md:text-4xl italic">疯狂</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-[#5B92FF] border-[3px] border-black px-6 py-1 rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="text-white text-3xl md:text-4xl">载入资源</span>
              </div>
            </div>
          </div>

          <p className="text-lg text-gray-600 mb-10">
            <span className="squiggly-line font-medium">请稍等，精彩马上就来...</span>
          </p>

          <div className="w-full h-10 bg-white border-4 border-black rounded-xl overflow-hidden relative">
            <div className="h-full bg-neo-yellow border-r-4 border-black loading-fill relative">
              <div className="absolute inset-0 opacity-10" style={{ background: 'repeating-linear-gradient(45deg, #000, #000 10px, transparent 10px, transparent 20px)' }} />
            </div>
          </div>
        </div>

        <div className="absolute -top-6 left-10 bg-neo-yellow border-4 border-black px-4 py-1 rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-sm">
          SYSTEM BOOTING...
        </div>


        <div className="absolute -left-10 -bottom-10 w-24 h-24 bg-[#FF85A2] border-4 border-black rounded-full flex items-center justify-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rotate-[-15deg]">
          <div className="flex flex-col items-center">
            <div className="flex gap-3 mb-1">
              <div className="w-2 h-2 bg-black rounded-full" />
              <div className="w-2 h-2 bg-black rounded-full" />
            </div>
            <div className="w-8 h-4 border-b-4 border-black rounded-full" />
          </div>
        </div>

        <div className="absolute -right-8 top-10 bg-white border-4 border-black p-2 rounded-xl rotate-12 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex gap-1">
            <div className="w-1 h-8 bg-black" />
            <div className="w-2 h-8 bg-black" />
            <div className="w-1 h-8 bg-black" />
            <div className="w-3 h-8 bg-black" />
            <div className="w-1 h-8 bg-black" />
          </div>
        </div>

        <div className="absolute -right-8 -bottom-4 bg-[#00D26A] border-4 border-black px-4 py-2 rounded-full rotate-12 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center">
          <span className="text-[10px] leading-none uppercase">XIAOMO</span>
          <span className="text-xs">AI + VIBE</span>
        </div>
      </div>

      <div className="fixed top-1/4 left-10 w-6 h-6 bg-[#5B92FF] border-2 border-black rotate-12 hidden md:block opacity-40" />
      <div className="fixed bottom-1/4 right-10 w-8 h-8 bg-neo-yellow border-2 border-black rounded-lg -rotate-12 hidden md:block opacity-40" />
      <div className="fixed top-3/4 left-20 w-4 h-4 bg-[#FF85A2] border-2 border-black rounded-full hidden md:block opacity-40" />
    </div>
  );
};