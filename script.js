document.getElementById('audio-player').addEventListener('play', function() {
    // Show the timeline section
    document.getElementById('timeline-section').style.display = 'block';
    
    // Smoothly scroll down to the timeline section
    document.getElementById('timeline-section').scrollIntoView({ behavior: 'smooth' });
});
