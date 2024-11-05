# 1. Decisions Made

## 1.1 Conditional Styling Approach

For handling the `soldOut` logic, I opted for a simpler and more intuitive approach by using conditional class names (i.e., sold-out) instead of passing a custom `soldOut` prop directly into the DOM elements. The class-based method is easier to understand and avoids unnecessary complexity, which was ideal given the scope of the task.

## 1.2 Dynamic Booking Links

The decision was made to use `show.url` as the booking link and fall back on determining whether a show is sold out based on the `see_tickets_url_infos` array. The booking link is set directly from the data provided, and if the array is empty, it indicates that the show is sold out, which prevents clickable links from appearing.

## 1.3 Responsive Grid Layout

To ensure a responsive layout, I implemented a grid system that adapts based on screen size:

- Single column on mobile.
- Two columns on medium-sized screens.
- Three columns on large screens.

I used a simple media query approach to handle this, making sure that the show tiles are consistent in height across rows to maintain a clean look.

# 2. Concessions Due to Time Constraints

## 2.1 Error Handling

While basic error handling was implemented to log errors to the console if data fetching fails, I didn’t include more advanced error handling or user-friendly error messages. In a more polished version, it would be ideal to provide better feedback to the user in case the fetch request fails.

## 2.2 UI Enhancements

Given the time constraints, I kept the UI design simple and focused on functional elements like buttons, images, and labels. In a more complete version of the project, I would like to add:

- Hover effects for buttons.
- Animations for loading states.
- Better placeholder images for if shows are missing images.

## 2.3 Testing

Due to time limitations, no formal unit or integration tests were written. Ideally, tests would be added for:

- Fetching data from the backend.
- Verifying the correct rendering of sold-out vs. available shows.
- Ensuring responsive behavior on different screen sizes.


# 3. Known Limitations

## 3.1 Sold Out Logic

While the `see_tickets_url_infos` array is used to determine if a show is sold out, this logic assumes that an empty array strictly means no tickets are available. In real-world scenarios, there might be other edge cases where this assumption might not hold, so the logic could be refined further based on additional API data.

## 3.2 Data Dependence

The implementation heavily relies on the structure of the provided JSON data (e.g., `see_tickets_url_infos` and `show.url`). Any changes to the API's response format could break the current solution, so validation or data normalization could be introduced in the future to handle unexpected changes.

# 4. Additional Notes

Custom Prop Warning: Initially, I used the `soldOut` prop directly on the `ShowCard` component, which React warned against. As part of the refactor, I avoided passing this prop to the DOM by using the className approach instead.

Cross-Origin Resource Sharing (CORS): To avoid CORS issues during development, I applied the `cors` middleware on the Express server to allow cross-origin requests between the frontend (React) and backend (Node.js).