// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "cv",
          description: "Currently an Applied Scientist at Sparxity (formerly SpiNNcloud Systems). Previously Postdoc at King&#39;s College London. Ph.D. from University of Manchester. Research interests include continual pretraining, reasoning, and self-improvement of large language models, and hardware-algorithm co-design for analog in-memory computing and neuromorphic hardware.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-i-placed-3rd-in-the-video-temporal-grounding-track-of-the-mars2-multimodal-reasoning-challenge-at-eccv-2026",
          title: 'I placed 3rd in the Video Temporal Grounding track of the MARS2 Multimodal...',
          description: "",
          section: "News",},{id: "news-i-placed-2nd-in-the-main-track-and-3rd-in-the-open-weight-track-of-the-quantiphy-challenge-on-quantitative-physical-reasoning-at-neurips-2026",
          title: 'I placed 2nd in the Main Track and 3rd in the Open-Weight Track...',
          description: "",
          section: "News",},{id: "news-i-will-be-at-neurips-2026-in-sydney-this-december-so-feel-free-to-email-me-if-you-would-like-to-meet-and-chat-about-self-improvement-context-management-or-novel-decoding-methods-for-llms",
          title: 'I will be at NeurIPS 2026 in Sydney this December, so feel free...',
          description: "",
          section: "News",},{id: "projects-ahwa-lora-for-analog-in-memory-computing",
          title: 'AHWA-LoRA for Analog In-Memory Computing',
          description: "Hardware-aware low-rank adaptation training that keeps pre-trained transformer weights fixed on analog AIMC tiles while training lightweight LoRA adapters.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ahwa_lora/";
            },},{id: "projects-analog-in-memory-computing-npu",
          title: 'Analog In-Memory Computing NPU',
          description: "Heterogeneous embedded NPU combining PCM-based analog in-memory computing tiles with digital accelerators for efficient neural network inference.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/analog_npu/";
            },},{id: "projects-low-latency-spiking-neural-networks",
          title: 'Low-Latency Spiking Neural Networks',
          description: "QFFS quantization framework and dynamic confidence decoding for ultra-low-latency SNN inference on ImageNet.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/low_latency_snn/";
            },},{id: "projects-noise-exploitation-for-ann-to-snn-conversion",
          title: 'Noise Exploitation for ANN-to-SNN Conversion',
          description: "Injecting controllable noise during ANN quantization training to model SNN spike dynamics, enabling seamless end-to-end ANN-to-SNN conversion.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/noise_adaptor/";
            },},{id: "projects-noise-robustness-in-snns",
          title: 'Noise Robustness in SNNs',
          description: "Spiking neural networks tolerate synaptic noise far better than ANNs thanks to temporal spike integration acting as a natural noise filter.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/noise_robustness/";
            },},{id: "projects-skyrmionic-synapses",
          title: 'Skyrmionic Synapses',
          description: "Nanoscale multilayer skyrmion synapses operating at room temperature for deep spiking neural networks.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/skyrmion_synapse/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%63%68%65%6E%6C%69%61%74%6F%7A@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/chenlicodebank", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/chen-li-727698157", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/ArtwistLi", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=NPm503cAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
