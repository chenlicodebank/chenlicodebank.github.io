---
layout: page
title: Noise Exploitation for ANN-to-SNN Conversion
description: Injecting controllable noise during ANN quantization training to model SNN spike dynamics, enabling seamless end-to-end ANN-to-SNN conversion.
img: assets/img/project_noise_adaptor.jpg
importance: 2
category: Algorithms
---

The Noise Adaptor injects controllable noise during ANN quantization training to model SNN spike dynamics. This enables seamless end-to-end conversion without runtime noise correction.

**Key Results:**

- CIFAR-10 (ResNet-18): 95.26% (T=2), 95.95% (T=4), 96.61% (T=8), 96.72% (T=16)
- ImageNet (ResNet-50): 37.08% (T=2), 58.76% (T=4), 71.50% (T=8), 75.69% (T=16)

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_noise_adaptor.jpg" title="Noise Adaptor" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

**Publication:** Li C, Rajendran B. _Noise Adaptor in Spiking Neural Networks_. arXiv 2024.
