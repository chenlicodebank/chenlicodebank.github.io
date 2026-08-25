---
layout: page
title: Noise Robustness in SNNs
description: Spiking neural networks tolerate synaptic noise far better than ANNs thanks to temporal spike integration acting as a natural noise filter.
img: assets/img/project_noise_robustness.png
importance: 1
category: Algorithms
---

Spiking neural networks (SNNs) process information through discrete spikes accumulated over time. This temporal integration acts as a natural noise filter: the signal-to-noise ratio increases with the number of spikes per synapse, making SNNs inherently more robust to synaptic weight noise than ANNs.

**Key Results:**

- SNN shows <0.2% accuracy drop vs ANN shows 75% accuracy drop (CNN on MNIST; noise level = 100% x max weight)

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_noise_robustness.png" title="Noise robustness comparison" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

**Publication:** Li C, Chen R, Moutafis C, Furber S. _Robustness to Noisy Synaptic Weights in Spiking Neural Networks_. IJCNN 2020.
