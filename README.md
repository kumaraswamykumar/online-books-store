📘 Project Requirement Document
Title

Readify – Online Books Store

Objective

To develop a fully functional online Books Store web application where users can browse books, search books, filter by price range, view details, add items to cart, and manage their cart seamlessly using a clean UI and fake APIs.

Tech Stack

Frontend: React.js, React Router

State Management: Context API

Styling: CSS / Tailwind (optional)

Icons: react-icons

APIs: JSONPlaceholder (for fake book data), Lorem Picsum (for images)

Completion Instructions
Functionality – Must Have

Display list of all books (using fake API data)

Search functionality with debounce (300ms)

Filter books by price range

Book card with image, price, and description

Add to Cart functionality

Cart page with:

Increase quantity

Decrease quantity

Remove item

Total items count

URL-based search: /books?q=keyword

Error handling and loading states

Responsive UI

Functionality – Nice to Have

Book details page

Wishlist feature

User authentication pages (fake)

Pagination

Toast messages for cart actions

Guidelines to Develop the Project
Must Have

Use React functional components only.

Use Context API for cart management.

Use fake APIs only:

JSONPlaceholder → for book titles

Picsum → for random book images

Follow file structure best practices (components, pages, context, router).

Use React Router v6.

Debounced search input.

Nice to Have

Use custom hooks for fetching.

Use reusable components (Card, Loader, ErrorMessage).

Maintain consistent UI design spacing.

Keep code clean and formatted.

Submission Instructions
Must Have

Submit GitHub repository link.

Main branch should contain:

/src folder

README.md

Proper folder structure

App should run using npm install and npm start.

Nice to Have

Deploy project on:

Vercel or Render

Add live link in README

Add screenshots or screen-recording of the UI.

Resources
Design Files

(No mandatory design provided, but you may follow simple e-commerce layouts)

APIs
1. JSONPlaceholder

Used for book titles/content
https://jsonplaceholder.typicode.com/posts

2. Picsum Photos

Random book images
https://picsum.photos/200?random={id}

Third-Party Packages

react-router-dom

react-icons