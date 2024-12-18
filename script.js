{/* <script> */}
function generateRecommendation() {
    const location = document.getElementById('location').value;
    const preference = document.getElementById('preference').value;
    const budget = document.getElementById('budget').value;

    if (!location || !preference || !budget) {
        alert('Please fill out all fields.');
        return;
    }

    const recommendations = {
        Beach: {
            Adventure: {
                Low: "How about exploring the hidden gems of Goa, India? With a low budget, you can enjoy thrilling water sports and vibrant nightlife.",
                Medium: "We recommend a trip to Bali, Indonesia! Enjoy white sandy beaches, exciting water sports, and cultural adventures all within a medium budget.",
                High: "Experience luxury and adventure in the Maldives! Stay at a water villa, dive into crystal-clear waters, and enjoy premium amenities."
            },
            Relaxation: {
                Low: "Consider a peaceful retreat to the beaches of Thailand. Affordable resorts and serene sunsets await!",
                Medium: "Enjoy a relaxing trip to the Amalfi Coast, Italy. With a medium budget, you can indulge in scenic views and fine cuisine.",
                High: "Spoil yourself with a luxurious vacation to Bora Bora. Pamper yourself at high-end resorts and enjoy pristine beaches."
            }
        },
        Mountains: {
            Adventure: {
                Low: "Explore the adventurous trails of the Rocky Mountains on a budget. Perfect for hiking and camping enthusiasts.",
                Medium: "Head to the Swiss Alps for thrilling activities like skiing and paragliding. A medium budget covers an unforgettable experience.",
                High: "Indulge in an adventurous escapade to Patagonia, South America. Luxury lodges and breathtaking landscapes await."
            },
            Relaxation: {
                Low: "Escape to the Appalachian Mountains for a budget-friendly, tranquil retreat amidst nature.",
                Medium: "Relax in a cozy chalet in the Canadian Rockies. Enjoy the serene environment and natural beauty.",
                High: "Unwind in luxury at the Himalayas. High-end resorts and breathtaking views make for the ultimate relaxation."
            }
        }
    };

    const recommendation = recommendations[location][preference][budget];

    const outputDiv = document.getElementById('output');
    outputDiv.textContent = recommendation;
    outputDiv.style.display = 'block';
    outputDiv.classList.add('fade-in');
}
{/* </script> */}