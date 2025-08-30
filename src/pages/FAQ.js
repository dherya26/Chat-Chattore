import React, { useState } from 'react';
import '../App.css';

function FAQ() {
  const [activeCategory, setActiveCategory] = useState(null);
  
  const categories = [
    {
      id: 'recipes',
      name: 'Recipes',
      icon: 'ri-book-2-line',
      description: 'Questions about our recipes and cooking instructions',
      questions: [
        {
          question: 'Are the recipes suitable for beginners?',
          answer: 'Yes! Our recipes range from beginner to advanced levels. Each recipe includes detailed step-by-step instructions to help you succeed regardless of your cooking experience.'
        },
        {
          question: 'Can I request specific recipes?',
          answer: 'Absolutely! We welcome recipe requests. You can submit your requests through the contact form on our homepage.'
        },
        {
          question: 'Are the ingredients easy to find?',
          answer: 'We try to use ingredients that are commonly available in most grocery stores. For any specialty ingredients, we provide suggestions for alternatives.'
        }
      ]
    },
    {
      id: 'sessions',
      name: 'Live Sessions',
      icon: 'ri-video-chat-line',
      description: 'Questions about our live cooking classes',
      questions: [
        {
          question: 'How do I join a live cooking session?',
          answer: 'You can register for our live cooking sessions through the Sessions page. Once registered, you\'ll receive an email with the link to join the session.'
        },
        {
          question: 'What equipment do I need for live sessions?',
          answer: 'You\'ll need a stable internet connection, basic kitchen equipment, and the ingredients listed in the session description. We\'ll send you the ingredient list in advance.'
        }
      ]
    },
    {
      id: 'dietary',
      name: 'Dietary Options',
      icon: 'ri-leaf-line',
      description: 'Questions about dietary preferences and restrictions',
      questions: [
        {
          question: 'Do you offer vegetarian and vegan recipes?',
          answer: 'Yes, we have a wide variety of vegetarian recipes and are continuously adding more vegan options to our collection.'
        },
        {
          question: 'Do you have gluten-free recipes?',
          answer: 'Yes, we have many gluten-free options and clearly mark them in our recipe collection.'
        }
      ]
    },
    {
      id: 'community',
      name: 'Community',
      icon: 'ri-group-line',
      description: 'Questions about sharing and community engagement',
      questions: [
        {
          question: 'How can I share my cooking results with you?',
          answer: 'We\'d love to see your creations! You can tag us on Instagram @chat_chattore or use the hashtag #ChatChattoreRecipes.'
        },
        {
          question: 'Can I contribute my own recipes?',
          answer: 'Yes! We welcome community contributions. Please use the contact form to submit your recipes for review.'
        }
      ]
    }
  ];
  
  return (
    <div className="page-content">
      <h1 className="faq-heading">Frequently Asked Questions</h1>
      <p className="faq-subtitle">Find answers to common questions about our recipes, cooking sessions, and more</p>
      
      
      {activeCategory === null ? (
        <div className="categories-grid">
          {categories.map((category) => (
            <div 
              key={category.id} 
              className="category-card"
              onClick={() => setActiveCategory(category.id)}
            >
              <i className={`category-icon ${category.icon}`}></i>
              <h3 className="category-name">{category.name}</h3>
              <p className="category-desc">{category.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="questions-section active">
          <a 
            href="#" 
            className="back-to-categories"
            onClick={(e) => {
              e.preventDefault();
              setActiveCategory(null);
            }}
          >
            <i className="ri-arrow-left-line"></i> Back to Categories
          </a>
          
          <h2 className="category-title">
            {categories.find(cat => cat.id === activeCategory)?.name} Questions
          </h2>
          
          <div className="faq-container">
            {categories
              .find(cat => cat.id === activeCategory)
              ?.questions.map((item, index) => (
                <div className="faq-item" key={index}>
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </div>
              ))}
          </div>
          
          <div className="faq-cta">
            <button className="contact-btn" onClick={() => {
              // Always redirect to home page and scroll to contact section
              window.location.href = '/#page3';
            }}>
              <i className="ri-question-line"></i> Ask Your Question
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default FAQ;