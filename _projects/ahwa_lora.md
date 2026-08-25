---
layout: page
title: AHWA-LoRA for Analog In-Memory Computing
description: Hardware-aware low-rank adaptation training that keeps pre-trained transformer weights fixed on analog AIMC tiles while training lightweight LoRA adapters.
img: assets/img/project_dynamic_confidence.jpg
importance: 6
category: Devices & Hardware
---

AHWA-LoRA training keeps pre-trained transformer weights fixed on analog AIMC tiles and trains only lightweight LoRA adapters under simulated hardware noise, enabling efficient task adaptation without costly reprogramming.

**Key Achievements:**

- LoRA: 0.52% of total params
- 4% latency overhead vs full AIMC
- Up to 38.2% accuracy recovery on instruction tuning (9 task averaged)
- Up to 32.8% accuracy gain on mathematical reasoning (GSM8K)
- First post-deployment adaptation study for transformers & LLMs on AIMC

**Models Tested:**

- MobileBERT (SQuAD F1 on AIMC)
- BERT-Base (GLUE benchmark)
- BERT-Large (~300M params)
- LLaMA 3.1 8B (Instruction tuning + RL)

**Publication:** Li C, Ferro E, Lammie C, et al. _Efficient Transformer Adaptation for Analog In-Memory Computing via Low-Rank Adapters_. Neuromorphic Computing and Engineering, 2026.
