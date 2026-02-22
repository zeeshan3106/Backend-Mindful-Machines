import React from 'react';
import './FAQ.css';

function FAQ() {
  return (
    <section className="faq-page">

      {/* HERO */}
      <div className="faq-hero">
        <h1>Frequently Asked Questions</h1>
        <p>Everything you need to know about our AI products and solutions.</p>
      </div>

      {/* HUMANOID ROBOTS */}
      <div className="faq-category">Humanoid Robots</div>

      <div className="faq-item">
        <input type="checkbox" id="faq1" />
        <label htmlFor="faq1">
          What humanoid robots do you sell?
          <span className="icon">+</span>
        </label>
        <div className="answer">
          <p>We offer advanced humanoid robots including companion robots, AI assistants, and industrial humanoids designed for efficiency and interaction.</p>
          <div className="faq-meta">
            <span>Rating: ★★★★☆</span>
            <span>Comments: 24</span>
          </div>
        </div>
      </div>

      <div className="faq-item">
        <input type="checkbox" id="faq2" />
        <label htmlFor="faq2">
          Can they interact naturally with humans?
          <span className="icon">+</span>
        </label>
        <div className="answer">
          <p>Yes, our humanoid robots have natural language processing and AI-driven gesture recognition for seamless human interaction.</p>
          <div className="faq-meta">
            <span>Rating: ★★★★★</span>
            <span>Comments: 18</span>
          </div>
        </div>
      </div>

      {/* AI Drones */}
      <div className="faq-category">AI Drones</div>

      <div className="faq-item">
        <input type="checkbox" id="faq3" />
        <label htmlFor="faq3">
          What types of AI drones are available?
          <span className="icon">+</span>
        </label>
        <div className="answer">
          <p>We provide surveillance drones, delivery drones, and aerial mapping drones equipped with AI navigation and autonomous flight capabilities.</p>
          <div className="faq-meta">
            <span>Rating: ★★★★☆</span>
            <span>Comments: 12</span>
          </div>
        </div>
      </div>

      <div className="faq-item">
        <input type="checkbox" id="faq4" />
        <label htmlFor="faq4">
          Are the drones AI-enabled for autonomous flight?
          <span className="icon">+</span>
        </label>
        <div className="answer">
          <p>Absolutely. Our drones can plan routes, avoid obstacles, and execute missions autonomously using AI algorithms.</p>
          <div className="faq-meta">
            <span>Rating: ★★★★★</span>
            <span>Comments: 20</span>
          </div>
        </div>
      </div>

      {/* AI Home Devices */}
      <div className="faq-category">AI Home Devices</div>

      <div className="faq-item">
        <input type="checkbox" id="faq5" />
        <label htmlFor="faq5">
          What AI home devices do you offer?
          <span className="icon">+</span>
        </label>
        <div className="answer">
          <p>We sell smart assistants, security devices, smart lighting, AI-powered climate control, and other IoT-enabled AI home devices.</p>
          <div className="faq-meta">
            <span>Rating: ★★★★☆</span>
            <span>Comments: 30</span>
          </div>
        </div>
      </div>

      <div className="faq-item">
        <input type="checkbox" id="faq6" />
        <label htmlFor="faq6">
          Can these devices be integrated with other smart home systems?
          <span className="icon">+</span>
        </label>
        <div className="answer">
          <p>Yes, our AI home devices are compatible with most major smart home ecosystems including Alexa, Google Home, and Apple HomeKit.</p>
          <div className="faq-meta">
            <span>Rating: ★★★★☆</span>
            <span>Comments: 22</span>
          </div>
        </div>
      </div>

      {/* Wellness & Health */}
      <div className="faq-category">Wellness & Health</div>

      <div className="faq-item">
        <input type="checkbox" id="faq7" />
        <label htmlFor="faq7">
          How can AI products improve wellness?
          <span className="icon">+</span>
        </label>
        <div className="answer">
          <p>Our AI wellness products provide personalized health monitoring, guided meditation, AI fitness coaching, and health analytics to optimize lifestyle and wellbeing.</p>
          <div className="faq-meta">
            <span>Rating: ★★★★☆</span>
            <span>Comments: 15</span>
          </div>
        </div>
      </div>

      <div className="faq-item">
        <input type="checkbox" id="faq8" />
        <label htmlFor="faq8">
          Are these products safe for everyday use?
          <span className="icon">+</span>
        </label>
        <div className="answer">
          <p>Yes. All our wellness and health AI devices are rigorously tested for safety, reliability, and privacy compliance.</p>
          <div className="faq-meta">
            <span>Rating: ★★★★★</span>
            <span>Comments: 18</span>
          </div>
        </div>
      </div>

    </section>
  );
}

export default FAQ;
