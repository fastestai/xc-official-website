import VideoThumb from "@/public/images/banner-low.jpg";
import ModalVideo from "@/components/modal-video";

export default function HeroHome() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
              data-aos="fade-up"
            >
              What is XCelsior AI: GPT for Sheets™?
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xl text-indigo-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                XCelsior AI: GPT for Sheets™ with Gemini, OpenAI Boost your efficiency with AI-driven insights and confident answers in Google Sheets™ using ChatGPT and Gemini.
              </p>
              <p
                className="mb-8 text-xl text-indigo-200/65"
                data-aos="fade-up"
                data-aos-delay={400}
              >
                XCelsior AI transforms Google Sheets™ with advanced AI, integrating external information seamlessly. Leverage community-contributed prompts and functions for enhanced insights and automation. Analyze, summarize data faster and more accurately with XCelsior AI, your ultimate tool for smarter, data-driven insights.
              </p>
              <p
                className="mb-8 text-xl text-indigo-200/65"
                data-aos="fade-up"
                data-aos-delay={600}
              >
                Watch this video to learn how to use XCelsiorAI to boost your efficiency and streamline your workflow:
              </p>
              <ModalVideo
                thumb={VideoThumb}
                thumbWidth={1104}
                thumbHeight={576}
                thumbAlt="Modal video thumbnail"
                videoId="BDY5CtgbAzM"  // YouTube video ID
              />
              <div className="mt-8 mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
  <div data-aos="fade-up" data-aos-delay={800}>
    <a
      className="btn group mb-4 w-full bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
      href="https://workspace.google.com/marketplace/app/xcelsior_ai_gpt_for_sheets_with_gemini_o/953720034790" target="_blank"  rel="noopener noreferrer"
    >
      <span className="relative inline-flex items-center">
      Unlock Power Tools
        <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
          -&gt;
        </span>
      </span>
    </a>
  </div>
  <div data-aos="fade-up" data-aos-delay={1000}>
    <a
      className="btn relative w-full bg-gradient-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] sm:ml-4 sm:w-auto"
      href="https://doc.xcelsior.ai/"  target="_blank"  rel="noopener noreferrer"
    >
      <span className="relative inline-flex items-center">
      Master the Features
        <span className="ml-1 tracking-normal text-gray-300/50 transition-transform group-hover:translate-x-0.5">
          -&gt;
        </span>
      </span>
    </a>
  </div>
</div>

            </div>
          </div>

          <div className="mx-auto max-w-3xl text-left" data-aos="fade-up">
            <h2 className="text-3xl font-semibold text-white">
              Why choose XCelsior AI: GPT for Sheets™?
            </h2>
            <ul className="mt-6 space-y-4 text-xl text-indigo-200/65">
              <li>✅ No sign-up required</li>
              <li>💎 Free with premium features</li>
              <li>🔑 No API key required</li>
              <li>💰 No Recalculation Fees</li>
              <li>🌐 Support Community-Contributed Prompts and Functions (UDF)</li>
              <li>📂 Support Upload Private Docs and Evernote-Like Clipper</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
