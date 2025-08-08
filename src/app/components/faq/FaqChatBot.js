 "use client";
import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, ArrowLeft, Menu, Phone, Mail, Leaf, ShoppingCart, CreditCard, RotateCcw, Truck, User, Users } from "lucide-react";

export default function CureAyurvedicChatBot() {
  const faqData = {
    "Account & Login": {
      answer: "Help with account creation, login, and profile management.",
      icon: User,
      subCategories: [
        "How do I sign up?",
        "How do I log in?",
        "How do I change my address?",
        "Can I change my phone number?",
        "Can I make multiple accounts?"
      ]
    },
    "Orders & Shopping": {
      answer: "Information about placing orders, tracking, and cart management.",
      icon: ShoppingCart,
      subCategories: [
        "How can I place an order?",
        "How can I track my order?",
        "Can I buy multiple products?",
        "Can I save items in cart?",
        "Can I order over phone?",
        "Is there a minimum order value?"
      ]
    },
    "Payment & Billing": {
      answer: "Learn about payment methods, billing, and payment issues.",
      icon: CreditCard,
      subCategories: [
        "What payment methods available?",
        "What if payment fails?",
        "Unable to make payment?",
        "How to get billing details?",
        "Is COD available?",
        "COD available everywhere?",
        "Amount deducted but order not confirmed?"
      ]
    },
    "Returns & Refunds": {
      answer: "Information about returns, refunds, and cancellations.",
      icon: RotateCcw,
      subCategories: [
        "How can I cancel my order?",
        "How can I return my order?",
        "What is your return policy?",
        "How will I get refund?",
        "Order returned without delivery?"
      ]
    },
    "Delivery & Shipping": {
      answer: "Get info about delivery times, shipping, and delivery issues.",
      icon: Truck,
      subCategories: [
        "How long does delivery take?",
        "My delivery is delayed?",
        "Is COD available everywhere?"
      ]
    },
    "Our Products": {
      answer: "Explore our authentic Ayurvedic products for wellness.",
      icon: Leaf,
      subCategories: [
        "VedicCal - Bone Health",
        "VedicFlx - Joint Support",
        "VedicFlx Oil - Joint Support Oil",
        "D Vedic Syrup - Blood Sugar Support",
        "D Vedic - Sugar Management",
        "Vedic Shilajit - Energy & Strength"
      ]
    },
    "Support & Collaboration": {
      answer: "Contact support or learn about collaboration opportunities.",
      icon: Users,
      subCategories: [
        "How to contact customer care?",
        "How to collaborate with us?"
      ]
    }
  };

  const detailedAnswers = {
    // Account & Login
    "How do I sign up?": "Visit our website, go to registration page, enter your name, email, and address.",
    "How do I log in?": "Go to login page, enter email/username and password, then click 'Login.'",
    "How do I change my address?": "Go to account settings, click 'Edit Address,' and save changes.",
    "Can I change my phone number?": "Yes. Go to account settings, edit phone number, and save.",
    "Can I make multiple accounts?": "Yes, with unique email or phone number for each account.",

    // Orders & Shopping
    "How can I place an order?": "Visit website, select products, enter delivery address, choose payment method, and confirm.",
    "How can I track my order?": "Check tracking link in SMS or contact support with order ID.",
    "Can I buy multiple products?": "Yes. Add multiple items to cart and place combined order.",
    "Can I save items in cart?": "Yes, if logged in. Otherwise, cart may reset.",
    "Can I order over phone?": "Yes. Call customer support and share order details.",
    "Is there a minimum order value?": "No minimum order value required.",

    // Payment & Billing
    "What payment methods available?": "UPI, credit/debit cards, net banking, wallets, and COD.",
    "What if payment fails?": "Retry with stable internet or try another payment method.",
    "Unable to make payment?": "Try different method or contact our support team.",
    "How to get billing details?": "Check confirmation email or contact support with order ID.",
    "Is COD available?": "Yes, for supported areas.",
    "COD available everywhere?": "Available in most cities. Check at checkout.",
    "Amount deducted but order not confirmed?": "Wait few minutes. If no confirmation, contact support.",

    // Returns & Refunds
    "How can I cancel my order?": "Use 'Cancel Order' in your account or contact support.",
    "How can I return my order?": "Go to 'My Orders,' select item, and click 'Return.'",
    "What is your return policy?": "Returns accepted within 30 days if unused and in original condition.",
    "How will I get refund?": "Refunds to original payment method within 5–7 business days.",
    "Order returned without delivery?": "Contact support with your order ID.",

    // Delivery & Shipping
    "How long does delivery take?": "Usually 3–7 business days depending on location.",
    "My delivery is delayed?": "Check 'Track Order' or contact support with order ID.",

    // Products
    "VedicCal - Bone Health": "🦴 **VedicCal** - Bone Health Formula\n\n**Benefits:** Improves bone density, provides nutrients, prevents bone porosity\n\n**Usage:** 1 capsule twice daily after meals with warm water\n\n**Ingredients:** Khatika, Hadjod, Mukta sukti bhasma, Godanti bhasma",

    "VedicFlx - Joint Support": "🦵 **VedicFlx** - Joint Support\n\n**Benefits:** Reduces inflammation, restores mobility, strengthens bones\n\n**Usage:** 2 soft gel capsules daily on empty stomach\n\n**Ingredients:** Nirgundee, Methi, Maharasnadi, Shallaki, Guggul",

    "VedicFlx Oil - Joint Support Oil": "💆 **VedicFlx Oil** - Joint Support Oil\n\n**Benefits:** Supports movement, reduces stiffness, strengthens muscles\n\n**Usage:** Apply on affected area, massage gently\n\n**Ingredients:** Nilgiri oil, Dhatura oil, Erand oil, Kapur oil",

    "D Vedic Syrup - Blood Sugar Support": "🍯 **D Vedic Syrup** - Blood Sugar Support\n\n**Benefits:** Maintains healthy sugar levels, supports metabolism\n\n**Usage:** 15ml twice daily before breakfast and dinner\n\n**Ingredients:** Karela, Guduchi, Ambehaldi, Amla, Methi",

    "D Vedic - Sugar Management": "💊 **D Vedic** - Sugar Management\n\n**Benefits:** Supports sugar control, glucose metabolism, organ protection\n\n**Usage:** 1 tablet twice daily before meals\n\n**Ingredients:** Amla, Belpatra, Jambubeej, Gudmar, Karela",

    "Vedic Shilajit - Energy & Strength": "⚡ **Vedic Shilajit** - Energy & Strength\n\n**Benefits:** Increases energy, reduces stress, supports vitality\n\n**Usage:** 1 capsule twice daily after meals\n\n**Ingredients:** Shilajit, Gokshur, Ashwagandha, Krounchbeej",

    // Support & Collaboration
    "How to contact customer care?": "📞 **Contact Details:**\n\n📧 Email: contact@cureayurvedic.com\n📱 Phone: 880023120\n\nOur support team is ready to help!",
    "How to collaborate with us?": "🤝 **Collaboration:**\nEmail your proposal to contact@cureayurvedic.com\n\nWe'll respond within 2 business days."
  };

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "🙏 Welcome to Cure Ayurvedic! 🌿\n\nI'm here to help with our Ayurvedic products, orders, payments, and more. How can I assist you today?",
      showOptions: true
    }
  ]);
  const [input, setInput] = useState("");
  const [currentCategory, setCurrentCategory] = useState(null);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const mainOptions = Object.keys(faqData);
  const contactOption = "Contact Support Team";

  const simulateTyping = async (response, showSubCategories = false, subCategories = []) => {
    setIsTyping(true);
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));
    setIsTyping(false);
    
    const newMessage = { 
      sender: "bot", 
      text: response,
      showSubCategories,
      subCategories,
      showMainMenu: !showSubCategories && !showSubCategories
    };
    
    setMessages(prev => [...prev, newMessage]);
  };

  const handleSend = async (userInput) => {
    const query = userInput || input.trim();
    if (!query) return;

    const newMessages = [...messages, { sender: "user", text: query }];
    setMessages(newMessages);
    setInput("");

    let botResponse = "";
    let showSubCategories = false;
    let subCategories = [];

    // Check if it's a main category
    if (faqData[query]) {
      botResponse = faqData[query].answer;
      showSubCategories = true;
      subCategories = faqData[query].subCategories;
      setCurrentCategory(query);
    }
    // Check if it's a subcategory
    else if (detailedAnswers[query]) {
      botResponse = detailedAnswers[query];
      showSubCategories = false;
    }
    // Check for contact support
    else if (query === contactOption) {
      botResponse = "📞 **Contact Our Team:**\n\n📧 Email: contact@cureayurvedic.com\n📱 Phone: 880023120\n\nWe're here to help! 🙏";
    }
    // Search for related answers
    else {
      const searchTerm = query.toLowerCase();
      let foundAnswer = null;
      
      // Search in detailed answers first
      for (const [key, value] of Object.entries(detailedAnswers)) {
        if (key.toLowerCase().includes(searchTerm) || value.toLowerCase().includes(searchTerm)) {
          foundAnswer = value;
          break;
        }
      }
      
      // Search in main categories
      if (!foundAnswer) {
        for (const [key, value] of Object.entries(faqData)) {
          if (key.toLowerCase().includes(searchTerm) || value.answer.toLowerCase().includes(searchTerm)) {
            foundAnswer = value.answer;
            showSubCategories = true;
            subCategories = value.subCategories;
            setCurrentCategory(key);
            break;
          }
        }
      }

      botResponse = foundAnswer || "I don't have specific info about that. Please contact our support team or select from options below.";
    }

    await simulateTyping(botResponse, showSubCategories, subCategories);
  };

  const handleBackToMain = async () => {
    setCurrentCategory(null);
    const userMessage = { sender: "user", text: "Show main menu" };
    setMessages(prev => [...prev, userMessage]);
    
    await simulateTyping("How else can I help you today?", false, []);
    
    setTimeout(() => {
      setMessages(prev => [...prev, {
        sender: "bot",
        text: "Please select from the options below:",
        showOptions: true
      }]);
    }, 500);
  };

  const TypingIndicator = () => (
    <div className="flex items-center space-x-1 px-3 py-2">
      <div className="flex space-x-1">
        <div className="w-2 h-2 bg-[#586e20] rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-[#586e20] rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
        <div className="w-2 h-2 bg-[#586e20] rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
      </div>
      <span className="text-xs text-[#586e20] ml-2">Assistant is typing...</span>
    </div>
  );

  const ChatButton = ({ onClick, children, variant = "primary", icon: Icon }) => {
    const baseClasses = "px-4 py-3 rounded-lg text-left transition-all duration-300 transform hover:scale-105 hover:shadow-md text-sm font-medium flex items-center gap-2";
    const variants = {
      primary: "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300",
      secondary: "bg-[#82a133] bg-opacity-10 text-[#586e20] hover:bg-[#82a133] hover:bg-opacity-20 border border-[#82a133] border-opacity-30",
      contact: "bg-orange-100 text-orange-800 hover:bg-orange-200 border border-orange-300",
      product: "bg-green-50 text-[#586e20] hover:bg-green-100 border border-[#82a133] border-opacity-40",
      back: "bg-[#586e20] text-white hover:bg-[#82a133] border-none"
    };
    
    return (
      <button
        onClick={onClick}
        className={`${baseClasses} ${variants[variant]}`}
      >
        {Icon && <Icon size={16} />}
        {children}
      </button>
    );
  };

  const CompactChatButton = ({ onClick, children, variant = "secondary" }) => {
    const baseClasses = "px-3 py-2 rounded-md text-left transition-all duration-200 hover:shadow-sm text-xs font-medium";
    const variants = {
      secondary: "bg-[#82a133] bg-opacity-10 text-[#586e20] hover:bg-[#82a133] hover:bg-opacity-20 border border-[#82a133] border-opacity-30",
      product: "bg-green-50 text-[#586e20] hover:bg-green-100 border border-[#82a133] border-opacity-40"
    };
    
    return (
      <button
        onClick={onClick}
        className={`${baseClasses} ${variants[variant]}`}
      >
        {children}
      </button>
    );
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
      {/* Chat Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#586e20] hover:bg-[#82a133] text-white px-5 py-3 rounded-full shadow-xl flex items-center gap-3 transition-all duration-300 transform hover:scale-110 group"
        >
          <MessageCircle size={20} className="group-hover:animate-pulse" />
          <span className="hidden sm:inline font-medium">Chat with us</span>
          <span className="sm:hidden font-medium">Chat</span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-[360px] sm:w-96 bg-white rounded-2xl shadow-2xl flex flex-col border border-gray-200 max-h-[65vh] sm:max-h-[500px] animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#586e20] to-[#82a133] text-white p-4 flex items-center justify-between rounded-t-2xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                <Leaf className="text-[#586e20]" size={20} />
              </div>
              <div>
                <span className="font-bold text-base">Cure Ayurvedic</span>
                <div className="text-xs text-green-100 flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                  Online • Ready to help
                </div>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-black hover:bg-opacity-20 rounded-full p-2 transition-all duration-200"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-4 h-50 sm:h-[300px] overflow-y-auto bg-gray-50 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`${msg.sender === "user" ? "text-right" : "text-left"}`}>
                <div
                  className={`inline-block px-4 py-3 rounded-2xl max-w-[85%] shadow-sm ${
                    msg.sender === "user" 
                      ? "bg-[#586e20] text-white rounded-br-md" 
                      : "bg-white text-gray-800 border border-gray-200 rounded-bl-md"
                  }`}
                >
                  <div className="whitespace-pre-line text-sm leading-relaxed">
                    {msg.text}
                  </div>
                </div>

                {/* Show main options */}
                {msg.showOptions && (
                  <div className="flex flex-col gap-2 mt-4">
                    {mainOptions.map((option, i) => (
                      <ChatButton
                        key={i}
                        onClick={() => handleSend(option)}
                        variant={option === "Our Products" ? "product" : "primary"}
                        icon={faqData[option].icon}
                      >
                        {option}
                      </ChatButton>
                    ))}
                    <ChatButton
                      onClick={() => handleSend(contactOption)}
                      variant="contact"
                      icon={Phone}
                    >
                      {contactOption}
                    </ChatButton>
                  </div>
                )}

                {/* Show subcategories in compact grid layout */}
                {msg.showSubCategories && msg.subCategories && (
                  <div className="mt-4">
                    <div className="grid grid-cols-1 gap-2">
                      {msg.subCategories.map((subCat, i) => (
                        <CompactChatButton
                          key={i}
                          onClick={() => handleSend(subCat)}
                          variant={currentCategory === "Our Products" ? "product" : "secondary"}
                        >
                          {subCat}
                        </CompactChatButton>
                      ))}
                    </div>
                    <div className="mt-3">
                      <ChatButton
                        onClick={handleBackToMain}
                        variant="back"
                        icon={ArrowLeft}
                      >
                        Back to Main Menu
                      </ChatButton>
                    </div>
                  </div>
                )}

                {/* Show main menu option */}
                {msg.showMainMenu && (
                  <div className="mt-3">
                    <ChatButton
                      onClick={handleBackToMain}
                      variant="primary"
                      icon={Menu}
                    >
                      View All Options
                    </ChatButton>
                  </div>
                )}
              </div>
            ))}
            
            {isTyping && (
              <div className="text-left">
                <div className="inline-block bg-white rounded-2xl rounded-bl-md shadow-sm border border-gray-200">
                  <TypingIndicator />
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input Section */}
          <div className="flex border-t bg-white rounded-b-2xl p-3 gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type your question..."
              className="flex-1 px-4 py-3 outline-none text-sm border border-gray-200 rounded-xl focus:border-[#82a133] focus:ring-1 focus:ring-[#82a133] transition-all duration-200"
            />
            <button
              onClick={() => handleSend()}
              disabled={!input.trim()}
              className="bg-[#586e20] hover:bg-[#82a133] disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-4 py-3 transition-all duration-200 rounded-xl shadow-sm hover:shadow-md transform hover:scale-105 disabled:transform-none"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}