import React, { useState, useEffect } from 'react';
import { Grid, ShowCard, ShowImage, ShowTitle, ShowSubtitle, BookNowButton, SoldOutLabel, ShowDetails } from './ShowStyles';

function Shows() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/shows')
      .then(res => res.json())
      .then(data => setShows(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <Grid>
      {shows.map((show) => {
        const tickets = show.see_tickets_url_infos || []; // Get tickets array
        const bookingLink = show.url || null; // Use show.url as the booking link
        const isSoldOut = tickets.length === 0; // Determine if sold out based on tickets array

        return (
          <ShowCard className={isSoldOut ? 'sold-out' : ''} key={show.id}>
            <ShowImage src={show.image} alt={show.title} />
            <ShowDetails>
            <ShowTitle>{show.title}</ShowTitle>
            <ShowSubtitle>About The Show</ShowSubtitle>
            </ShowDetails>
            {isSoldOut ? (
              <SoldOutLabel>SOLD OUT</SoldOutLabel>
            ) : (
              <BookNowButton href={bookingLink}>BOOK NOW</BookNowButton>
            )}
          </ShowCard>
        );
      })}
    </Grid>
  );
}

export default Shows;
