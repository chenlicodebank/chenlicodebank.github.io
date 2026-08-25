---
layout: page
title: Low-Latency Spiking Neural Networks
description: QFFS quantization framework and dynamic confidence decoding for ultra-low-latency SNN inference on ImageNet.
img: assets/img/project_qffs.jpg
importance: 3
category: Algorithms
---

## Quantization Framework for Fast SNNs (QFFS)

Compresses ANN activation precision to 2-bit and suppresses "occasional noise" in SNNs. First to achieve competitive ImageNet accuracy at fewer than 6 time steps via ANN-to-SNN conversion.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_qffs.jpg" title="QFFS Framework" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

## Dynamic Confidence

A runtime optimization that decodes confidence from SNN spike outputs and terminates inference early when confident.

**Key Results:**

- Reduces latency by 26-36% on ImageNet with no accuracy loss
- VGG-16 QFFS: 72.52% accuracy, reduced from 4 to 2.86 avg. timesteps (29% saving)
- ResNet-50 QFFS: 73.17% accuracy, reduced from 6 to 4.42 avg. timesteps (26% saving)

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_dynamic_confidence.jpg" title="Dynamic Confidence" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

**Publications:**

- Li C, Ma L, Furber S. _Quantization Framework for Fast Spiking Neural Networks_. Frontiers in Neuroscience, 2022.
- Li C, Jones E, Furber S. _Unleashing the Potential of Spiking Neural Networks with Dynamic Confidence_. ICCV 2023.
