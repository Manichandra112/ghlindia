import React, { useState, useMemo } from 'react';
import { Search, Calendar, User, ChevronRight, ArrowLeft, ArrowRight, Clock, BookOpen } from 'lucide-react';
import { BLOG_CONTENT } from '../data/blogContent';
import './BlogsPage.css';

/* ─── All blog data extracted from https://www.ghlindia.com/blogs (pages 1–19) ─── */
const GHL_IMG = 'https://www.ghlindia.com/assets/img/blogimages';

const blogs = [
  /* ── Page 1 ── */
  { id:   1, title: "Property Flipping vs Rental Income: Which Creates Wealth Faster?", date: '26/06/2026', author: 'Sumitha', image: `${GHL_IMG}/June_BTB_Blog_8.jpg`, link: 'property-flipping-vs-rental-income-which-creates-wealth-faster' },
  { id:   2, title: "How Professional Investors Identify Undervalued Real Estate Opportunities", date: '26/06/2026', author: 'Sumitha', image: `${GHL_IMG}/June_BTB_Blog_7.jpg`, link: 'how-professional-investors-identify-undervalued-real-estate-opportunities' },
  { id:   3, title: "NCDs Explained: How They Work and Who Should Invest", date: '26/06/2026', author: 'Sumitha', image: `${GHL_IMG}/June_BTB_Blog_6.jpg`, link: 'ncds-explained-how-they-work-and-who-should-invest' },
  { id:   4, title: "Fractional Real Estate vs Buying an Entire Property: Which Investment Choice Is Right for You?", date: '26/06/2026', author: 'Sumitha', image: `${GHL_IMG}/June_BTB_Blog_5.jpg`, link: 'fractional-real-estate-vs-buying-entire-property' },
  { id:   5, title: "Five Benefits of Fractional Investing Beyond Affordability", date: '26/06/2026', author: 'Sumitha', image: `${GHL_IMG}/June_BTB_Blog_4.jpg`, link: 'benefits-of-fractional-investing-beyond-affordability' },
  { id:   6, title: "5 Common Myths About Property Flipping in India", date: '26/06/2026', author: 'Sumitha', image: `${GHL_IMG}/June_BTB_Blog_3.jpg`, link: 'property-flipping-india-common-myths-debunked' },
  { id:   7, title: "The Property Flipping Lifecycle: From Acquisition to Exit. 5 Steps You Need to Follow", date: '26/06/2026', author: 'Sumitha', image: `${GHL_IMG}/June_BTB_Blog_2.jpg`, link: 'property-flipping-lifecycle-acquisition-to-exit-guide' },
  { id:   8, title: "How AIFs Are Opening New Opportunities in Property Flipping, NCDs, and Fractional Investing", date: '26/06/2026', author: 'Sumitha', image: `${GHL_IMG}/June_BTB_Blog_1.jpg`, link: 'alternative-investment-funds-india-property-flipping-ncds-fractional-investing' },
  { id:   9, title: "Why Property Flipping Is Becoming Popular in India?", date: '19/06/2026', author: 'Sumitha', image: `${GHL_IMG}/19th_Jun_Blog.jpg.jpeg`, link: 'why-property-flipping-is-becoming-popular-in-india' },
  /* ── Page 2 ── */
  { id:  10, title: "How to Start Property Flipping in India With Low Capital:", date: '12/06/2026', author: 'Sumitha', image: `${GHL_IMG}/12th_Jun_Blog.jpg.jpeg`, link: 'property-flipping-in-india-with-low-capital' },
  { id:  11, title: "How to Invest Money Outside the Stock Market Safely", date: '05/06/2026', author: 'Sumitha', image: `${GHL_IMG}/5th_Jun_Blog.jpg.jpeg`, link: 'how-to-invest-money-outside-stock-market-safely' },
  { id:  12, title: "Why Is Property Flipping Gaining Popularity in Recent Times?", date: '01/06/2026', author: 'Sumitha', image: `${GHL_IMG}/May-BTB-Blog-8.jpg.jpeg`, link: 'why-property-flipping-is-gaining-popularity' },
  { id:  13, title: "AIF vs Mutual Funds: Comprehending the Difference & Where do NCDs fit?", date: '01/06/2026', author: 'Sumitha', image: `${GHL_IMG}/May-BTB-Blog-7.jpg.jpeg`, link: 'aif-vs-mutual-funds-and-how-ncds-fit-in' },
  { id:  14, title: "Understanding Category II AIFs: A Strategic Guide for Sophisticated Investors", date: '01/06/2026', author: 'Sumitha', image: `${GHL_IMG}/May-BTB-Blog-6.jpg.jpeg`, link: 'understanding-category-ii-aifs-guide-for-sophisticated-investors' },
  { id:  15, title: "Risks and Rewards in Alternative Investment Platforms: An Overview", date: '01/06/2026', author: 'Sumitha', image: `${GHL_IMG}/May-BTB-Blog-5.jpg.jpeg`, link: 'risks-and-rewards-of-alternative-investment-platforms' },
  { id:  16, title: "Are Alternative Investments Suitable for Salaried Professionals?", date: '01/06/2026', author: 'Sumitha', image: `${GHL_IMG}/May-BTB-Blog-4.jpg.jpeg`, link: 'are-alternative-investments-suitable-for-salaried-professionals' },
  { id:  17, title: "Why More Investors Are Exploring Fixed-Income Alternatives Beyond FDs", date: '01/06/2026', author: 'Sumitha', image: `${GHL_IMG}/May-BTB-Blog-3.jpg.jpeg`, link: 'fixed-income-alternatives-beyond-fds' },
  { id:  18, title: "NCDs vs Fixed Deposits: Which Investment Fits Your Goals Better?", date: '01/06/2026', author: 'Sumitha', image: `${GHL_IMG}/May-BTB-Blog-2.jpg.jpeg`, link: 'ncds-vs-fixed-deposits-which-investment-fits-your-goals' },
  /* ── Page 3 ── */
  { id:  19, title: "What are Secured NCDs, and How Do They Work?", date: '01/06/2026', author: 'Sumitha', image: `${GHL_IMG}/May-BTB-Blog-1.jpg.jpeg`, link: 'secured-ncds-how-they-work-benefits-investment-guide' },
  { id:  20, title: "Safe Investment Options for Beginners With Low Risk:", date: '29/05/2026', author: 'Sumitha', image: `${GHL_IMG}/29-05-Blog.jpg.jpeg`, link: 'safe-investment-options-for-beginners-low-risk' },
  { id:  21, title: "Real Estate Investing Is Changing—Are You Keeping Up?", date: '23/05/2026', author: 'Sumitha', image: `${GHL_IMG}/BTB-Blog-3.jpg.jpeg`, link: 'modern-real-estate-investing-fractional-ownership-opportunities' },
  { id:  22, title: "How Smart Investors Build Multi-Asset Portfolios", date: '23/05/2026', author: 'Sumitha', image: `${GHL_IMG}/BTB-Blog-4.jpg.jpeg`, link: 'how-smart-investors-build-multi-asset-portfolios-with-ncds' },
  { id:  23, title: "Rental Yield vs Capital Appreciation: What Matters More?", date: '23/05/2026', author: 'Sumitha', image: `${GHL_IMG}/BTB-Blog-5.jpg.jpeg`, link: 'rental-yield-vs-capital-appreciation-real-estate-investment' },
  { id:  24, title: "Are NCDs Safe in India? Risk Analysis for First-Time Investors", date: '23/05/2026', author: 'Sumitha', image: `${GHL_IMG}/BTB-Blog-2.jpg.jpeg`, link: 'Are-NCDs-Safe-in-India-Risk-Analysis-for-First-Time-Investors' },
  { id:  25, title: "Why Investors Are Shifting from Stocks to Alternative Assets", date: '23/05/2026', author: 'Sumitha', image: `${GHL_IMG}/BTB-Blog-1.jpg.jpeg`, link: 'Why-Investors-Are-Shifting-from-to-Alternative-Assets' },
  { id:  26, title: "Are REITs a Good Investment in India? Pros and Cons Explained", date: '22/05/2026', author: 'Sumitha', image: `${GHL_IMG}/22-05-Blog.jpg.jpeg`, link: 'are-reits-a-good-investment-in-india-pros-and-cons' },
  { id:  27, title: "How to Diversify Your Investments Beyond Mutual Funds", date: '15/05/2026', author: 'Sumitha', image: `${GHL_IMG}/15th_May_Blog.jpg.jpeg`, link: 'diversify-investments-beyond-mutual-funds-india' },
  /* ── Page 4 ── */
  { id:  28, title: "How to Earn Monthly Income from Investments in 2025", date: '08/05/2026', author: 'Sumitha', image: `${GHL_IMG}/8th-May-blog.jpg.jpeg`, link: 'monthly-income-from-investments-india-2025' },
  { id:  29, title: "Investor Protection in India: Rights, Risks, and How to Safeguard Your Investments", date: '01/05/2026', author: 'Sumitha', image: `${GHL_IMG}/1st_May_Blog.jpg.jpeg`, link: 'investor-protection-india-rights-risks-and-safeguard' },
  { id:  30, title: "Fractional Ownership in India: A Complete Guide for New-Age Investors", date: '24/04/2026', author: 'Sumitha', image: `${GHL_IMG}/24th_Apr_Blog.jpg.jpeg`, link: 'fractional-ownership-india-complete-guide-investors' },
  { id:  31, title: "Alternative Investment Plans in India: Explore Beyond Traditional Options", date: '17/04/2026', author: 'Sumitha', image: `${GHL_IMG}/17th_Apr_Blog.jpg.jpeg`, link: 'alternative-investment-plans-india-explore-options' },
  { id:  32, title: "Best Investment Options in India for 2025: A Smart Investor's Guide", date: '10/04/2026', author: 'Sumitha', image: `${GHL_IMG}/10th_Apr_Blog.jpg.jpeg`, link: 'best-investment-options-india-2025-guide' },
  { id:  33, title: "Difference Between Shares and Debentures: Everything You Need to Know", date: '03/04/2026', author: 'Sumitha', image: `${GHL_IMG}/3rd_Apr_Blog.jpg.jpeg`, link: 'difference-between-shares-and-debentures' },
  { id:  34, title: "How to Grow Your Business: A Strategic Guide to Business Growth", date: '27/03/2026', author: 'Sumitha', image: `${GHL_IMG}/27th_Mar_Blog.jpg.jpeg`, link: 'how-to-grow-your-business-strategic-guide' },
  { id:  35, title: "Types of Investment in India : A Complete Guide for 2025", date: '20/03/2026', author: 'Sumitha', image: `${GHL_IMG}/20th_Mar_Blog.jpg.jpeg`, link: 'types-of-investment-in-india-complete-guide-2025' },
  { id:  36, title: "Risk Management in Investment: Protecting your Wealth", date: '13/03/2026', author: 'Sumitha', image: `${GHL_IMG}/13th_mar_Blog.jpg.jpeg`, link: 'risk-management-in-investment' },
  /* ── Page 5 ── */
  { id:  37, title: "What is Systematic Investment Plan: Benefits and How to Start?", date: '06/03/2026', author: 'Sumitha', image: `${GHL_IMG}/6th_Mar_Blog.jpg.jpeg`, link: 'systematic-investment-plan-benefits' },
  { id:  38, title: "Investment vs Trading: Key Differences Every Investor Should Know", date: '27/02/2026', author: 'Sumitha', image: `${GHL_IMG}/27th_Feb_Blog.jpg.jpeg`, link: 'investment-vs-trading-key-differences' },
  { id:  39, title: "What are Debentures: Types, Benefits and How They Work?", date: '20/02/2026', author: 'Sumitha', image: `${GHL_IMG}/20th_feb_Blog.jpg.jpeg`, link: 'what-are-debentures-types-benefits' },
  { id:  40, title: "Investing vs. Saving – Which is Better for Your Future?", date: '13/02/2026', author: 'Sumitha', image: `${GHL_IMG}/13th_feb_Blog.jpg.jpeg`, link: 'investing-vs-saving-which-is-better' },
  { id:  41, title: "What is Asset Allocation? A Smart Investor's Guide to Portfolio Diversification", date: '06/02/2026', author: 'Sumitha', image: `${GHL_IMG}/6th_Feb_Blog.jpg.jpeg`, link: 'asset-allocation-portfolio-diversification-guide' },
  { id:  42, title: "Why Smart Investing is Important in 2025?", date: '30/01/2026', author: 'Sumitha', image: `${GHL_IMG}/30th_jan_Blog.jpg.jpeg`, link: 'why-smart-investing-is-important' },
  { id:  43, title: "How to Make Your Money Work for You: A Smart Investor Guide", date: '23/01/2026', author: 'Sumitha', image: `${GHL_IMG}/23rd_jan_Blog.jpg.jpeg`, link: 'how-to-make-your-money-work-for-you' },
  { id:  44, title: "The Impact of the Union Budget 2025 on Investments in India", date: '16/01/2026', author: 'Sumitha', image: `${GHL_IMG}/16th_jan_Blog.jpg.jpeg`, link: 'union-budget-2025-impact-on-investments' },
  { id:  45, title: "How to Protect Your Investments from Market Volatility?", date: '09/01/2026', author: 'Sumitha', image: `${GHL_IMG}/09th_jan_Blog.jpg.jpeg`, link: 'protect-investments-from-market-volatility' },
  /* ── Page 6 ── */
  { id:  46, title: "How to Read and Analyze Financial Statements for Investments?", date: '02/01/2026', author: 'Sumitha', image: `${GHL_IMG}/02nd_jan_Blog.jpg.jpeg`, link: 'how-to-read-analyze-financial-statements' },
  { id:  47, title: "The Role of Technology in Modern Investing", date: '26/12/2025', author: 'Sumitha', image: `${GHL_IMG}/26th_Dec_Blog.jpg.jpeg`, link: 'role-of-technology-in-modern-investing' },
  { id:  48, title: "The Benefits of Investing in Real Estate", date: '19/12/2025', author: 'Sumitha', image: `${GHL_IMG}/19th_Dec_Blog.jpg.jpeg`, link: 'benefits-of-investing-in-real-estate' },
  { id:  49, title: "Passive Income Investments", date: '12/12/2025', author: 'Sumitha', image: `${GHL_IMG}/12th_Dec_Blog.jpg.jpeg`, link: 'passive-income-investments' },
  { id:  50, title: "How to Create an Investment Plan", date: '05/12/2025', author: 'Sumitha', image: `${GHL_IMG}/5th_Dec_Blog.jpg.jpeg`, link: 'how-to-create-an-investment-plan' },
  { id:  51, title: "Key Strategies for Building a Strong Investment Portfolio", date: '28/11/2025', author: 'Sumitha', image: `${GHL_IMG}/28th_nov_Blog.jpg.jpeg`, link: 'key-strategies-strong-investment-portfolio' },
  { id:  52, title: "Introduction to Asset Management", date: '21/11/2025', author: 'Sumitha', image: `${GHL_IMG}/21st_nov_Blog.jpg.jpeg`, link: 'introduction-to-asset-management' },
  { id:  53, title: "Power of Compound Interest in Investments", date: '14/11/2025', author: 'Sumitha', image: `${GHL_IMG}/14th_nov_Blog.jpg.jpeg`, link: 'power-of-compound-interest-in-investments' },
  { id:  54, title: "Financial Literacy and its Importance", date: '07/11/2025', author: 'Sumitha', image: `${GHL_IMG}/07th_nov_Blog.jpg.jpeg`, link: 'financial-literacy-and-its-importance' },
  /* ── Page 7 ── */
  { id:  55, title: "Understanding the Stock Market", date: '31/10/2025', author: 'Sumitha', image: `${GHL_IMG}/31st_oct_Blog.jpg.jpeg`, link: 'understanding-the-stock-market' },
  { id:  56, title: "How to Start Investing as a Beginner", date: '24/10/2025', author: 'Sumitha', image: `${GHL_IMG}/24th_oct_Blog.jpg.jpeg`, link: 'how-to-start-investing-as-a-beginner' },
  { id:  57, title: "What Are Investment Bonds: Types, Benefits, and How to Invest?", date: '17/10/2025', author: 'Sumitha', image: `${GHL_IMG}/17th_Oct_Blog.jpg.jpeg`, link: 'what-are-investment-bonds' },
  { id:  58, title: "How to Start a Hedge Fund", date: '10/10/2025', author: 'Sumitha', image: `${GHL_IMG}/10th_oct_Blog.jpg.jpeg`, link: 'how-to-start-a-hedge-fund' },
  { id:  59, title: "Top Investment Strategies for Beginners", date: '03/10/2025', author: 'Sumitha', image: `${GHL_IMG}/3rd_oct_Blog.jpg.jpeg`, link: 'top-investment-strategies-for-beginners' },
  { id:  60, title: "What is Venture Capital Investing?", date: '26/09/2025', author: 'Sumitha', image: `${GHL_IMG}/26th_Sep_Blog.jpg.jpeg`, link: 'what-is-venture-capital-investing' },
  { id:  61, title: "What is Equity Funding?", date: '19/09/2025', author: 'Sumitha', image: `${GHL_IMG}/19th_sep_Blog.jpg.jpeg`, link: 'what-is-equity-funding' },
  { id:  62, title: "What is Business Valuation?", date: '12/09/2025', author: 'Sumitha', image: `${GHL_IMG}/12th_sep_Blog.jpg.jpeg`, link: 'what-is-business-valuation' },
  { id:  63, title: "Portfolio Investment", date: '05/09/2025', author: 'Sumitha', image: `${GHL_IMG}/5th_sep_Blog.jpg.jpeg`, link: 'portfolio-investment' },
  /* ── Page 8 ── */
  { id:  64, title: "What is Alternative Investment Fund?", date: '29/08/2025', author: 'Sumitha', image: `${GHL_IMG}/29th_aug_Blog.jpg.jpeg`, link: 'what-is-alternative-investment-fund' },
  { id:  65, title: "How To Invest in Stocks?", date: '22/08/2025', author: 'Sumitha', image: `${GHL_IMG}/22nd_aug_Blog.jpg.jpeg`, link: 'how-to-invest-in-stocks' },
  { id:  66, title: "What is Inflation?", date: '15/08/2025', author: 'Sumitha', image: `${GHL_IMG}/15th_aug_Blog.jpg.jpeg`, link: 'what-is-inflation' },
  { id:  67, title: "What are Real Estate Investment Trusts (REITs)?", date: '08/08/2025', author: 'Sumitha', image: `${GHL_IMG}/8th_aug_Blog.jpg.jpeg`, link: 'what-are-real-estate-investment-trusts' },
  { id:  68, title: "Know What is Private Equity?", date: '01/08/2025', author: 'Sumitha', image: `${GHL_IMG}/1st_aug_Blog.jpg.jpeg`, link: 'know-what-is-private-equity' },
  { id:  69, title: "Mutual Funds vs Index Funds", date: '25/07/2025', author: 'Sumitha', image: `${GHL_IMG}/25th_jul_Blog.jpg.jpeg`, link: 'mutual-funds-vs-index-funds' },
  { id:  70, title: "Is Cryptocurrency a Good Investment?", date: '18/07/2025', author: 'Sumitha', image: `${GHL_IMG}/18th_Jul_Blog.jpg.jpeg`, link: 'is-cryptocurrency-a-good-investment' },
  { id:  71, title: "How to Invest in Real Estate", date: '11/07/2025', author: 'Sumitha', image: `${GHL_IMG}/11th_Jul_Blog.jpg.jpeg`, link: 'how-to-invest-in-real-estate' },
  { id:  72, title: "What Are Exchange Traded Funds (ETFs)", date: '04/07/2025', author: 'Sumitha', image: `${GHL_IMG}/4th_Jul_Blog.jpg.jpeg`, link: 'what-are-exchange-traded-funds-etfs' },
  /* ── Page 9 ── */
  { id:  73, title: "Investing in gold: A Beginner guide", date: '27/06/2025', author: 'Sumitha', image: `${GHL_IMG}/27th_Jun_Blog.jpg.jpeg`, link: 'investing-in-gold-a-beginner-guide' },
  { id:  74, title: "Bonds vs Stocks: Which is better?", date: '20/06/2025', author: 'Sumitha', image: `${GHL_IMG}/20th_Jun_Blog.jpg.jpeg`, link: 'bonds-vs-stocks-which-is-better' },
  { id:  75, title: "What is Financial Planning?", date: '13/06/2025', author: 'Sumitha', image: `${GHL_IMG}/13th_Jun_Blog.jpg.jpeg`, link: 'what-is-financial-planning' },
  { id:  76, title: "What is Crowdfunding?", date: '06/06/2025', author: 'Sumitha', image: `${GHL_IMG}/6th_Jun_Blog.jpg.jpeg`, link: 'what-is-crowdfunding' },
  { id:  77, title: "What is Angel Investing?", date: '30/05/2025', author: 'Sumitha', image: `${GHL_IMG}/30th_may_Blog.jpg.jpeg`, link: 'what-is-angel-investing' },
  { id:  78, title: "What is Index Fund: Benefits, Types, and How to Invest?", date: '23/05/2025', author: 'Sumitha', image: `${GHL_IMG}/23rd_may_Blog.jpg.jpeg`, link: 'what-is-index-fund-benefits-types-how-to-invest' },
  { id:  79, title: "What is Dividend Investing?", date: '16/05/2025', author: 'Sumitha', image: `${GHL_IMG}/16th_may_Blog.jpg.jpeg`, link: 'what-is-dividend-investing' },
  { id:  80, title: "What is Mutual Fund?", date: '09/05/2025', author: 'Sumitha', image: `${GHL_IMG}/9th_may_Blog.jpg.jpeg`, link: 'what-is-mutual-fund' },
  { id:  81, title: "Impact Investing: A Way of Life", date: '02/05/2025', author: 'Sumitha', image: `${GHL_IMG}/2nd_may_Blog.jpg.jpeg`, link: 'impact-investing-a-way-of-life' },
  /* ── Page 10 ── */
  { id:  82, title: "What is ESG Investing?", date: '25/04/2025', author: 'Sumitha', image: `${GHL_IMG}/25th_Apr_Blog.jpg.jpeg`, link: 'what-is-esg-investing' },
  { id:  83, title: "What is Property Flipping?", date: '18/04/2025', author: 'Sumitha', image: `${GHL_IMG}/18th_Apr_Blog.jpg.jpeg`, link: 'what-is-property-flipping' },
  { id:  84, title: "What is Fractional Ownership?", date: '11/04/2025', author: 'Sumitha', image: `${GHL_IMG}/11th_Apr_Blog.jpg.jpeg`, link: 'what-is-fractional-ownership' },
  { id:  85, title: "Debt Instruments: A Key to Financial Stability", date: '04/04/2025', author: 'Sumitha', image: `${GHL_IMG}/4th_Apr_Blog.jpg.jpeg`, link: 'debt-instruments-key-to-financial-stability' },
  { id:  86, title: "What is SPV (Special Purpose Vehicle)?", date: '28/03/2025', author: 'Sumitha', image: `${GHL_IMG}/28th_Mar_Blog.jpg.jpeg`, link: 'what-is-spv-special-purpose-vehicle' },
  { id:  87, title: "What are NCDs (Non-Convertible Debentures)?", date: '21/03/2025', author: 'Sumitha', image: `${GHL_IMG}/21st_Mar_Blog.jpg.jpeg`, link: 'what-are-ncds-non-convertible-debentures' },
  { id:  88, title: "What is Value Investing?", date: '14/03/2025', author: 'Sumitha', image: `${GHL_IMG}/14th_Mar_Blog.jpg.jpeg`, link: 'what-is-value-investing' },
  { id:  89, title: "Why do we need Investment?", date: '07/03/2025', author: 'Sumitha', image: `${GHL_IMG}/7th_Mar_Blog.jpg.jpeg`, link: 'why-do-we-need-investment' },
  { id:  90, title: "What is Debt Funding?", date: '28/02/2025', author: 'Sumitha', image: `${GHL_IMG}/28th_Feb_Blog.jpg.jpeg`, link: 'what-is-debt-funding' },
  /* ── Page 11 ── */
  { id:  91, title: "Best Types of Real Estate Investment in India", date: '21/02/2025', author: 'Sumitha', image: `${GHL_IMG}/21st_Feb_Blog.jpg.jpeg`, link: 'best-types-of-real-estate-investment-in-india' },
  { id:  92, title: "Types of Alternative Investments", date: '14/02/2025', author: 'Sumitha', image: `${GHL_IMG}/14th_Feb_Blog.jpg.jpeg`, link: 'types-of-alternative-investments' },
  { id:  93, title: "What is Investment in Finance?", date: '07/02/2025', author: 'Sumitha', image: `${GHL_IMG}/7th_Feb_Blog.jpg.jpeg`, link: 'what-is-investment-in-finance' },
  { id:  94, title: "What is Alternative Investment?", date: '31/01/2025', author: 'Sumitha', image: `${GHL_IMG}/31st_Jan_Blog.jpg.jpeg`, link: 'what-is-alternative-investment' },
  { id:  95, title: "What is Stock Market?", date: '24/01/2025', author: 'Sumitha', image: `${GHL_IMG}/24th_Jan_Blog.jpg.jpeg`, link: 'what-is-stock-market' },
  { id:  96, title: "What is Sustainable Investing?", date: '17/01/2025', author: 'Sumitha', image: `${GHL_IMG}/17th_jan_Blog.jpg.jpeg`, link: 'what-is-sustainable-investing' },
  { id:  97, title: "What is Portfolio Management?", date: '10/01/2025', author: 'Sumitha', image: `${GHL_IMG}/10th_Jan_Blog.jpg.jpeg`, link: 'what-is-portfolio-management' },
  { id:  98, title: "What is Financial Investment?", date: '03/01/2025', author: 'Sumitha', image: `${GHL_IMG}/3rd_Jan_Blog.jpg.jpeg`, link: 'what-is-financial-investment' },
  { id:  99, title: "Advantages of Alternative Investment", date: '27/12/2024', author: 'Sumitha', image: `${GHL_IMG}/27th_Dec_Blog.jpg.jpeg`, link: 'advantages-of-alternative-investment' },
  /* ── Page 12 ── */
  { id: 100, title: "What is Real Estate Investment?", date: '20/12/2024', author: 'Sumitha', image: `${GHL_IMG}/blog59_01.jpg`, link: 'what-is-real-estate-investment' },
  { id: 101, title: "Smart Investments for Beginners", date: '20/12/2024', author: 'Sumitha', image: `${GHL_IMG}/blog60_01.jpg`, link: 'smart-investments-for-beginners' },
  { id: 102, title: "Best ROI Investments", date: '14/12/2024', author: 'Sumitha', image: `${GHL_IMG}/blog57_01.jpg`, link: 'best-roi-investments' },
  { id: 103, title: "NRI Investment in India", date: '07/12/2024', author: 'Sumitha', image: `${GHL_IMG}/blog55_01.jpg`, link: 'nri-investment-in-india' },
  { id: 104, title: "Investments with good returns", date: '30/11/2024', author: 'Sumitha', image: `${GHL_IMG}/blog52_01.jpg`, link: 'investments-with-good-returns' },
  { id: 105, title: "Retirement Planning in India", date: '23/11/2024', author: 'Sumitha', image: `${GHL_IMG}/blog51_01.jpg`, link: 'retirement-planning-in-india' },
  { id: 106, title: "Short-Term Investment Plans", date: '16/11/2024', author: 'Sumitha', image: `${GHL_IMG}/blog50_01.jpg`, link: 'short-term-investment-plans' },
  { id: 107, title: "Invest in Alternative Assets", date: '09/11/2024', author: 'Sumitha', image: `${GHL_IMG}/blog48_01.jpg`, link: 'invest-in-alternative-assets' },
  { id: 108, title: "Safe Investments with High Returns in India", date: '02/11/2024', author: 'Sumitha', image: `${GHL_IMG}/blog47_01.jpg`, link: 'safe-investments-with-high-returns-in-india' },
  /* ── Page 13 ── */
  { id: 109, title: "Common Mistakes in Financial Planning", date: '26/10/2024', author: 'Sumitha', image: `${GHL_IMG}/blog46_01.jpg`, link: 'Common-mistakes-in-financial-planning' },
  { id: 110, title: "Short term investing vs Long term investing", date: '19/10/2024', author: 'Sumitha', image: `${GHL_IMG}/blog45_01.jpg`, link: 'short-term-investing-vs-long-term-investing' },
  { id: 111, title: "Best Investment Plan with High Returns", date: '12/10/2024', author: 'Sumitha', image: `${GHL_IMG}/blog43_01.jpg`, link: 'best-investment-plan-with-high-returns' },
  { id: 112, title: "Long-Term Investment Plans", date: '05/10/2024', author: 'Sumitha', image: `${GHL_IMG}/blog42_01.jpg`, link: 'long-term-investment-plans' },
  { id: 113, title: "Investment Company in India", date: '21/09/2024', author: 'Sumitha', image: `${GHL_IMG}/blog39_01.jpg`, link: 'investment-company-in-india' },
  { id: 114, title: "Top Alternative Investment Funds in India", date: '21/09/2024', author: 'Sumitha', image: `${GHL_IMG}/blog37_01.jpg`, link: 'top-alternative-investment-funds-in-india' },
  { id: 115, title: "Best Real Estate Investment Company in India", date: '14/09/2024', author: 'Sumitha', image: `${GHL_IMG}/blog35_01.jpg`, link: 'best-real-estate-investment-company-in-india' },
  { id: 116, title: "Real Estate Investing in India", date: '08/09/2024', author: 'Sumitha', image: `${GHL_IMG}/blog34_01.jpg`, link: 'real-estate-investing-in-india' },
  { id: 117, title: "Key features of debt funding", date: '31/08/2024', author: 'Sumitha', image: `${GHL_IMG}/blog32_01.jpg`, link: 'key-features-of-debt-funding' },
  /* ── Page 14 ── */
  { id: 118, title: "Wealth Management Company", date: '24/08/2024', author: 'Sumitha', image: `${GHL_IMG}/blog30_01.jpg`, link: 'wealth-management-company' },
  { id: 119, title: "Real Estate Investing", date: '17/08/2024', author: 'Sumitha', image: `${GHL_IMG}/blog29_01.jpg`, link: 'real-estate-investing' },
  { id: 120, title: "Asset Management Company", date: '10/08/2024', author: 'Sumitha', image: `${GHL_IMG}/blog28_01.jpg`, link: 'asset-management-company' },
  { id: 121, title: "Best Alternative Investment Company", date: '03/08/2024', author: 'Sumitha', image: `${GHL_IMG}/blog27_01.jpg`, link: 'best-alternative-investment-company' },
  { id: 122, title: "Fractional Investment Model", date: '27/07/2024', author: 'Sumitha', image: `${GHL_IMG}/blog26_01.jpg`, link: 'fractional-investment-model' },
  { id: 123, title: "Alternative Investment Platform", date: '17/07/2024', author: 'Sumitha', image: `${GHL_IMG}/blog25_01.jpg`, link: 'alternative-investment-platform' },
  { id: 124, title: "Overcoming Fear: A Path to Investment Success", date: '10/07/2024', author: 'Sumitha', image: `${GHL_IMG}/blog24_01.jpg`, link: 'path-to-investment-success' },
  { id: 125, title: "Embracing Financial Wisdom", date: '03/07/2024', author: 'Sumitha', image: `${GHL_IMG}/blog21_01.jpg`, link: 'embracing-financial-wisdom' },
  { id: 126, title: "Path to Riches & Happiness, Away from the Usual Hustle", date: '26/06/2024', author: 'Sumitha', image: `${GHL_IMG}/blog20_01.jpg`, link: 'alternative-path-to-wealth-and-happiness' },
  /* ── Page 15 ── */
  { id: 127, title: "Navigating Path to Happiness and Wealth", date: '19/06/2024', author: 'Sumitha', image: `${GHL_IMG}/blog19_01.jpg`, link: 'how-to-achieve-happiness-and-wealth-with-smart-investing' },
  { id: 128, title: "Viha's Journey to Financial Freedom", date: '12/06/2024', author: 'Sumitha', image: `${GHL_IMG}/blog18_01.jpg`, link: 'difference-between-assets-and-liabilities' },
  { id: 129, title: "Is Giving Money the Key to Receiving?", date: '05/06/2024', author: 'Sumitha', image: `${GHL_IMG}/blog17_01.jpg`, link: 'the-power-of-giving-money-in-financial-success' },
  { id: 130, title: "Prioritizing ourselves on the path to financial freedom", date: '29/05/2024', author: 'Sumitha', image: `${GHL_IMG}/blog16_01.jpg`, link: 'prioritizing-financial-freedom-achieving-success' },
  { id: 131, title: "Role of Financial Education in Achieving True Wealth", date: '22/05/2024', author: 'Sumitha', image: `${GHL_IMG}/blog15_01.jpg`, link: 'role-financial-education-achieving-true-wealth' },
  { id: 132, title: "A Conversation with Viha on Investing and Building Assets", date: '15/05/2024', author: 'Sumitha', image: `${GHL_IMG}/blog14_01.jpg`, link: 'investing-tips-and-building-assets' },
  { id: 133, title: "Curious about smart investments? Come along with Viha!", date: '07/05/2024', author: 'Sumitha', image: `${GHL_IMG}/blog13_01.jpg`, link: 'smart-investing-tips-and-strategies' },
  { id: 134, title: "Is saving the only path to a wealthy life?", date: '01/05/2024', author: 'Sumitha', image: `${GHL_IMG}/blog12_01.jpg`, link: 'wealth-building-beyond-savings-vs-investments' },
  { id: 135, title: "Do you know about GHL's secured debentures and wholesale trading plans?", date: '24/04/2024', author: 'Sumitha', image: `${GHL_IMG}/blog11_01.jpg`, link: 'exploring-secured-debentures-and-wholesale-trading-investments' },
  /* ── Page 16 ── */
  { id: 136, title: "Distressed Property", date: '01/04/2024', author: 'Sumitha', image: `${GHL_IMG}/blog10_01.jpeg`, link: 'investing-in-distressed-properties' },
  { id: 137, title: "It's all about ROI & IRR", date: '23/03/2024', author: 'Sumitha', image: `${GHL_IMG}/blog09-02.jpeg`, link: 'understanding-roi-vs-irr-investment-returns' },
  { id: 138, title: "Capital gain Vs Cash flow", date: '26/02/2024', author: 'Sumitha', image: `${GHL_IMG}/b8_01.jpeg`, link: 'capital-gain-vs-cash-flow-investments-explained' },
  { id: 139, title: "Financial Freedom", date: '09/12/2023', author: 'Sumitha', image: `${GHL_IMG}/1.jpg`, link: 'achieve-financial-freedom-discover-true-wealth' },
  { id: 140, title: "More Dhan from Diwali", date: '09/11/2023', author: 'Sumitha', image: `${GHL_IMG}/blog6_01.jpg`, link: 'dhanteras-diwali-celebrations-financial-planning-tips' },
  { id: 141, title: "GHL India Vs Others", date: '11/10/2023', author: 'Sumitha', image: `${GHL_IMG}/blog5_02.jpeg`, link: 'high-returns-investment-ghl-india-vs-banks-fintech' },
  { id: 142, title: "Charge Creation", date: '19/09/2023', author: 'Sumitha', image: `${GHL_IMG}/Charge Creation and Asset-Backed Investments.jpg`, link: 'benefits-of-charge-creation-for-investors' },
  { id: 143, title: "What is Bank Guarantee?", date: '03/08/2023', author: 'Sumitha', image: `${GHL_IMG}/WhatsApp Image 2023-08-02 at 12.40.02 PM.jpg`, link: 'benefits-of-bank-guarantees-for-secure-investments' },
  { id: 144, title: "Debt Funding", date: '13/06/2023', author: 'Sumitha', image: `${GHL_IMG}/Blog-Debt-+-Funding1 (1).jpg`, link: 'debt-funds-investment-guide-stability-growth' },
  /* ── Page 17–19 (remaining) ── */
  { id: 145, title: "What is the best definition of investing", date: '14/05/2023', author: 'Sumitha', image: `${GHL_IMG}/post_1.jpeg`, link: 'what-is-the-best-definition-of-investing' },
  { id: 146, title: "Debt Funds Investment Guide Stability Growth", date: '13/06/2023', author: 'Sumitha', image: `${GHL_IMG}/Blog-Debt-+-Funding1 (1).jpg`, link: 'debt-funds-investment-guide-stability-growth' },
  { id: 147, title: "Benefits Of Bank Guarantees For Secure Investments", date: '03/08/2023', author: 'Sumitha', image: `${GHL_IMG}/WhatsApp Image 2023-08-02 at 12.40.02 PM.jpg`, link: 'benefits-of-bank-guarantees-for-secure-investments' },
  { id: 148, title: "Benefits Of Charge Creation For Investors", date: '19/09/2023', author: 'Sumitha', image: `${GHL_IMG}/Charge Creation and Asset-Backed Investments.jpg`, link: 'benefits-of-charge-creation-for-investors' },
  { id: 149, title: "High Returns Investment Ghl India Vs Banks Fintech", date: '11/10/2023', author: 'Sumitha', image: `${GHL_IMG}/blog5_02.jpeg`, link: 'high-returns-investment-ghl-india-vs-banks-fintech' },
  { id: 150, title: "Dhanteras Diwali Celebrations Financial Planning Tips", date: '09/11/2023', author: 'Sumitha', image: `${GHL_IMG}/blog6_01.jpg`, link: 'dhanteras-diwali-celebrations-financial-planning-tips' },
  { id: 151, title: "Achieve Financial Freedom Discover True Wealth", date: '09/12/2023', author: 'Sumitha', image: `${GHL_IMG}/1.jpg`, link: 'achieve-financial-freedom-discover-true-wealth' },
  { id: 152, title: "Capital Gain Vs Cash Flow Investments Explained", date: '26/02/2024', author: 'Sumitha', image: `${GHL_IMG}/b8_01.jpeg`, link: 'capital-gain-vs-cash-flow-investments-explained' },
  { id: 153, title: "Understanding Roi Vs Irr Investment Returns", date: '23/03/2024', author: 'Sumitha', image: `${GHL_IMG}/blog09-02.jpeg`, link: 'understanding-roi-vs-irr-investment-returns' },
  { id: 154, title: "Investing In Distressed Properties", date: '01/04/2024', author: 'Sumitha', image: `${GHL_IMG}/blog10_01.jpeg`, link: 'investing-in-distressed-properties' },
  { id: 155, title: "Exploring Secured Debentures And Wholesale Trading Investments", date: '24/04/2024', author: 'Sumitha', image: `${GHL_IMG}/blog11_01.jpg`, link: 'exploring-secured-debentures-and-wholesale-trading-investments' },
  { id: 156, title: "Wealth Building Beyond Savings Vs Investments", date: '01/05/2024', author: 'Sumitha', image: `${GHL_IMG}/blog12_01.jpg`, link: 'wealth-building-beyond-savings-vs-investments' },
  { id: 157, title: "Smart Investing Tips And Strategies", date: '07/05/2024', author: 'Sumitha', image: `${GHL_IMG}/blog13_01.jpg`, link: 'smart-investing-tips-and-strategies' },
  { id: 158, title: "Investing Tips And Building Assets", date: '15/05/2024', author: 'Sumitha', image: `${GHL_IMG}/blog14_01.jpg`, link: 'investing-tips-and-building-assets' },
  { id: 159, title: "Role Financial Education Achieving True Wealth", date: '22/05/2024', author: 'Sumitha', image: `${GHL_IMG}/blog15_01.jpg`, link: 'role-financial-education-achieving-true-wealth' },
  { id: 160, title: "Prioritizing Financial Freedom Achieving Success", date: '29/05/2024', author: 'Sumitha', image: `${GHL_IMG}/blog16_01.jpg`, link: 'prioritizing-financial-freedom-achieving-success' },
  { id: 161, title: "The Power Of Giving Money In Financial Success", date: '05/06/2024', author: 'Sumitha', image: `${GHL_IMG}/blog17_01.jpg`, link: 'the-power-of-giving-money-in-financial-success' },
  { id: 162, title: "Difference Between Assets And Liabilities", date: '12/06/2024', author: 'Sumitha', image: `${GHL_IMG}/blog18_01.jpg`, link: 'difference-between-assets-and-liabilities' },
  { id: 163, title: "How To Achieve Happiness And Wealth With Smart Investing", date: '19/06/2024', author: 'Sumitha', image: `${GHL_IMG}/blog19_01.jpg`, link: 'how-to-achieve-happiness-and-wealth-with-smart-investing' },
  { id: 164, title: "Alternative Path To Wealth And Happiness", date: '26/06/2024', author: 'Sumitha', image: `${GHL_IMG}/blog20_01.jpg`, link: 'alternative-path-to-wealth-and-happiness' },
];

export default function BlogsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedBlogId, setSelectedBlogId] = useState(null);
  const itemsPerPage = 9;

  const filteredBlogs = useMemo(() => {
    return blogs.filter(blog => blog.title.toLowerCase().includes(searchQuery.toLowerCase()));
  }, [searchQuery]);

  const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);

  const currentBlogs = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredBlogs.slice(start, start + itemsPerPage);
  }, [filteredBlogs, currentPage]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 250, behavior: 'smooth' });
    }
  };

  /* Build smart pagination numbers */
  const getPaginationNumbers = () => {
    const pages = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push('...');
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) pages.push(i);
      if (currentPage < totalPages - 2) pages.push('...');
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <div className="blogs-page-view">
      {/* 1. Hero Banner - Only show if no blog selected */}
      {!selectedBlogId && (
      <div className="blogs-hero-section">
        <div className="blogs-hero-wrapper">
          <div className="blogs-hero-overlay text-center">
            <span className="badge-tag">Knowledge Center</span>
            <h1>GHL India Blogs & Insights</h1>
            <p>Stay updated with expert real estate analyses, structured debt resources, and fractional investment guides.</p>
            <div className="blogs-search-box-container">
              <Search className="blogs-search-icon" size={20} />
              <input 
                type="text" 
                placeholder="Search articles, keywords, or guides..." 
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                className="blogs-search-input"
              />
            </div>
          </div>
        </div>
      </div>
      )}

      {/* 2. Breadcrumbs */}
      <div className="blogs-breadcrumbs" style={selectedBlogId ? { marginTop: 'var(--header-height, 90px)' } : {}}>
        <div className="container">
          <ul className="breadcrumbs-list">
            <li><a href="#/">Home</a></li>
            <span className="separator"><ChevronRight size={12} /></span>
            <li><a href="#/" onClick={() => setSelectedBlogId(null)}>Resources</a></li>
            <span className="separator"><ChevronRight size={12} /></span>
            <li><a href="#/" onClick={() => setSelectedBlogId(null)}>Blogs</a></li>
            {selectedBlogId && (() => {
              const blog = blogs.find(b => b.id === selectedBlogId);
              return (
                <>
                  <span className="separator"><ChevronRight size={12} /></span>
                  <li className="active" style={{ color: '#e41f26', fontWeight: '600' }}>{blog?.title}</li>
                </>
              );
            })()}
          </ul>
        </div>
      </div>

      {/* Blog Detail View */}
      {selectedBlogId && (() => {
        const blog = blogs.find(b => b.id === selectedBlogId);
        const relatedBlogs = blogs.filter(b => b.id !== selectedBlogId).slice(0, 3);
        
        return (
          <div className="blog-details-view">
            <div className="container-small">
              <article className="blog-full-article">
                <div className="article-header">
                  <span className="badge-tag">{blog.link.split('-')[0].toUpperCase()}</span>
                  <h1>{blog.title}</h1>
                  <div className="article-meta">
                    <div className="meta-item">
                      <Calendar size={14} />
                      <span>{blog.date}</span>
                    </div>
                    <div className="meta-item">
                      <User size={14} />
                      <span>By {blog.author}</span>
                    </div>
                    <div className="meta-item">
                      <Clock size={14} />
                      <span>5 min read</span>
                    </div>
                  </div>
                </div>

                <div className="article-featured-image">
                  <img src={blog.image} alt={blog.title} />
                </div>

                <div className="article-body-content">
                  {blog.content ? (
                    blog.content.split('\n\n').map((para, idx) => (
                      para.trim() && <p key={idx}>{para.trim()}</p>
                    ))
                  ) : (
                    <>
                      <p>
                        In today's dynamic investment landscape, {blog.title.toLowerCase()} has become increasingly important for investors looking to diversify their portfolios and achieve sustainable wealth growth.
                      </p>
                      
                      <h3>Understanding the Basics</h3>
                      <p>
                        This comprehensive guide explores the fundamental concepts and strategies that successful investors employ. Whether you're a beginner or an experienced investor, understanding these principles is crucial for making informed decisions.
                      </p>

                      <p>
                        The investment world has evolved significantly over the years. What worked a decade ago might not be as effective today. That's why staying informed and continuously learning is essential for long-term success.
                      </p>

                      <h3>Key Strategies for Success</h3>
                      <p>
                        There are several proven strategies that can help you maximize returns while managing risk effectively. Let's explore some of the most effective approaches:
                      </p>

                      <p>
                        <strong>1. Diversification:</strong> Don't put all your eggs in one basket. Spreading your investments across different asset classes reduces risk.
                      </p>

                      <p>
                        <strong>2. Research and Due Diligence:</strong> Before investing, thoroughly research the opportunity. Understand the market, the competition, and potential risks.
                      </p>

                      <p>
                        <strong>3. Long-term Perspective:</strong> Successful investors think long-term. Market volatility is normal, and patience often pays off.
                      </p>

                      <h3>Real-World Applications</h3>
                      <p>
                        Let's look at how these principles apply in real-world scenarios. Real estate investment, for example, combines the tangibility of physical assets with the potential for significant returns through both appreciation and rental income.
                      </p>

                      <p>
                        Similarly, fractional investing has democratized access to premium real estate opportunities that were previously only available to high-net-worth individuals. This approach allows investors to participate in quality projects with lower capital requirements.
                      </p>

                      <h3>Conclusion</h3>
                      <p>
                        Whether you're exploring {blog.title.toLowerCase()} or considering other investment options, the key is to make informed decisions based on your financial goals and risk tolerance. At GHL India, we're committed to providing you with the insights and opportunities you need to build sustainable wealth.
                      </p>
                    </>
                  )}
                </div>

                <div className="article-footer-actions">
                  <button className="action-pill-btn">
                    <span>👍</span> <span>Helpful</span>
                  </button>
                  <button className="action-pill-btn">
                    <span>💬</span> <span>Comment</span>
                  </button>
                  <button className="action-pill-btn">
                    <span>📤</span> <span>Share</span>
                  </button>
                </div>
              </article>
            </div>

            {/* Related Blogs Section */}
            <section className="related-blogs-section">
              <div className="container">
                <h2 className="related-title">Latest Posts</h2>
                <div className="blogs-grid">
                  {relatedBlogs.map(relBlog => (
                    <div
                      key={relBlog.id}
                      onClick={() => setSelectedBlogId(relBlog.id)}
                      className="blog-card glass-panel"
                    >
                      <div className="blog-card-img-box">
                        <img src={relBlog.image} alt={relBlog.title} loading="lazy" />
                      </div>
                      <div className="blog-card-body">
                        <div className="blog-card-meta">
                          <span><Calendar size={13} /> {relBlog.date}</span>
                        </div>
                        <h4 className="blog-card-title">{relBlog.title}</h4>
                        <div className="blog-card-footer">
                          <div className="blog-card-author">
                            <User size={14} />
                            <span>{relBlog.author}</span>
                          </div>
                          <span className="read-more-btn">
                            <span>Read More</span>
                            <ChevronRight size={14} />
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        );
      })()}

      {/* Main Blog List View - Only show if no blog is selected */}
      {!selectedBlogId && (
      <section className="blogs-grid-section">
        <div className="container">
          {filteredBlogs.length === 0 ? (
            <div className="blogs-no-results text-center">
              <BookOpen size={48} className="no-results-icon" />
              <h3>No articles found</h3>
              <p>We couldn't find any articles matching "{searchQuery}".</p>
              <button onClick={() => { setSearchQuery(''); }} className="btn btn-primary reset-btn">Clear Search</button>
            </div>
          ) : (
            <>
              <div className="blogs-results-count">
                Showing {(currentPage - 1) * itemsPerPage + 1}–{Math.min(currentPage * itemsPerPage, filteredBlogs.length)} of {filteredBlogs.length} articles
              </div>
              <div className="blogs-grid">
                {currentBlogs.map(blog => (
                  <div
                    key={blog.id}
                    onClick={() => setSelectedBlogId(blog.id)}
                    className="blog-card glass-panel"
                  >
                    <div className="blog-card-img-box">
                      <img src={blog.image} alt={blog.title} loading="lazy" />
                    </div>
                    <div className="blog-card-body">
                      <div className="blog-card-meta">
                        <span><Calendar size={13} /> {blog.date}</span>
                      </div>
                      <h4 className="blog-card-title">{blog.title}</h4>
                      <div className="blog-card-footer">
                        <div className="blog-card-author">
                          <User size={14} />
                          <span>{blog.author}</span>
                        </div>
                        <span className="read-more-btn">
                          <span>Read More</span>
                          <ChevronRight size={14} />
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="blogs-pagination">
                  <button className="page-nav-btn" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                    <ArrowLeft size={16} /><span>Prev</span>
                  </button>
                  <div className="page-numbers">
                    {getPaginationNumbers().map((pageNum, idx) =>
                      pageNum === '...' ? (
                        <span key={`dots-${idx}`} className="page-dots">…</span>
                      ) : (
                        <button key={pageNum} className={`page-num-btn ${currentPage === pageNum ? 'active' : ''}`} onClick={() => handlePageChange(pageNum)}>
                          {pageNum}
                        </button>
                      )
                    )}
                  </div>
                  <button className="page-nav-btn" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                    <span>Next</span><ArrowRight size={16} />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
      )}

      {/* Newsletter - Show only if no blog is selected */}
      {!selectedBlogId && (
      <section className="blogs-newsletter-section">
        <div className="container">
          <div className="newsletter-card glass-panel">
            <span className="badge-tag">Newsletter</span>
            <h2>Get Real Estate Insights Delivered Weekly</h2>
            <p>Join over 10,000+ smart investors receiving our analytical market write-ups and campaign alerts.</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter your email address" className="newsletter-input" />
              <button className="btn btn-primary submit-btn">Subscribe Now</button>
            </div>
          </div>
        </div>
      </section>
      )}
    </div>
  );
}
