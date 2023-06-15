'use client';

import React from 'react';
import Sketch from '@react-p5/core';
import type p5Types from 'p5';

interface ComponentProps {
    // Your component props
}

const FlowFieldSketch: React.FC<ComponentProps> = (props: ComponentProps) => {
    let particles: Particle[];
    const noiseScale = 500;
    const noiseStrength = 1;
    const particleCount = 2000;

    const setup = (p5: p5Types, canvasParentRef: Element) => {
        const canvas = p5
            .createCanvas(p5.windowWidth, p5.windowHeight)
            .parent(canvasParentRef);
        p5.noStroke();
        particles = [];
        for (let i = 0; i < particleCount; i++) {
            const loc = p5.createVector(
                p5.random(p5.width * 1.2),
                p5.random(p5.height),
                2
            );
            const angle = 0;
            const dir = p5.createVector(p5.cos(angle), p5.sin(angle));
            const speed = p5.random(0.5, 2);
            particles[i] = new Particle(loc, dir, speed);
        }
        p5.background(0);
    };

    const draw = (p5: p5Types) => {
        p5.fill(0, 10);
        p5.rect(0, 0, p5.width, p5.height);
        for (const particle of particles) {
            particle.run(p5);
        }
    };

    class Particle {
        loc: p5Types.Vector;
        dir: p5Types.Vector;
        speed: number;
        r: number;
        g: number;
        b: number;

        constructor(loc: p5Types.Vector, dir: p5Types.Vector, speed: number) {
            this.loc = loc;
            this.dir = dir;
            this.speed = speed;
            this.r = Math.floor(Math.random() * 256); // Random value between 0 and 255
            this.g = Math.floor(Math.random() * 256); // Random value between 0 and 255
            this.b = Math.floor(Math.random() * 256); // Random value between 0 and 255
        }

        run(p5: p5Types) {
            this.move(p5);
            this.checkEdges(p5);
            this.update(p5);
        }

        move(p5: p5Types) {
            const angle =
                p5.noise(
                    this.loc.x / noiseScale,
                    this.loc.y / noiseScale,
                    p5.frameCount / noiseScale
                ) *
                p5.TWO_PI *
                noiseStrength;
            this.dir.x = p5.cos(angle);
            this.dir.y = p5.sin(angle);
            const vel = this.dir.copy();
            const d = 1;
            vel.mult(this.speed * d);
            this.loc.add(vel);
        }

        checkEdges(p5: p5Types) {
            if (
                this.loc.x < 0 ||
                this.loc.x > p5.width ||
                this.loc.y < 0 ||
                this.loc.y > p5.height
            ) {
                this.loc.x = p5.random(p5.width * 1.2);
                this.loc.y = p5.random(p5.height);
            }
        }

        update(p5: p5Types) {
            p5.fill(this.r, this.g, this.b);
            p5.ellipse(this.loc.x, this.loc.y, this.loc.z);
        }
    }

    return <Sketch setup={setup} draw={draw} />;
};

export default FlowFieldSketch;
