$(document).ready(function() {
    $('.display').hide();
    $('.backed').hide();

    // Button to start the video and show the slider
    $('.btn-slider').on('click', function() {
        $('.sliderPop').show();
        $('.ct-sliderPop-container').addClass('open');
        $('.sliderPop').addClass('flexslider');
        $('.sliderPop .ct-sliderPop-container').addClass('slides');
        $('.culture-section').hide();
        $('.display').show();
        $('.black').hide();
        $('.backed').show();
        $('.wrapper').hide();

        // Disable interactions and scrolling during video playback
        disableClicks();
        disableScroll();

        // Trigger close when the video ends
        $('video').on('ended', function() {
            closeSliderPop();
            enableClicks(); // Re-enable clicks after video ends
            enableScroll(); // Re-enable scrolling after video ends
        });
    });

    // Close button functionality
    $('.ct-sliderPop-close').on('click', function() {
        closeSliderPop(); // Close slider manually (if allowed)
    });

    // Function to close the sliderPop and reset the page
    function closeSliderPop() {
        $('.video-container').hide();
        $('.ct-sliderPop-container').removeClass('open');
        $('.sliderPop').removeClass('flexslider');
        $('.sliderPop .ct-sliderPop-container').removeClass('slides');
        $('.black').hide();
        $('.backed').hide();
        $('.display').show(); // Show .display when slider is closed
        enableClicks(); // Make sure clicks are re-enabled
        enableScroll(); // Re-enable scrolling
    }

    // Function to disable all clicks during video playback
    function disableClicks() {
        $('.ct-sliderPop-close').addClass('disabled');
        $('.ct-sliderPop-close').css('pointer-events', 'none'); // Disable pointer events
    }

    // Function to re-enable clicks after video ends
    function enableClicks() {
        $('.ct-sliderPop-close').removeClass('disabled');
        $('.ct-sliderPop-close').css('pointer-events', 'auto'); // Re-enable pointer events
    }

    // Function to disable scrolling during video playback
    function disableScroll() {
        // Disable scrolling for all devices
        $('body').addClass('disable-scroll');

        // Prevent scroll events (mouse, touch, and keyboard)
        $(window).on('wheel.disableScroll', function(e) {
            e.preventDefault();
        });

        $(window).on('touchmove.disableScroll', function(e) {
            e.preventDefault();
        });

        $(document).on('keydown.disableScroll', function(e) {
            var keys = [32, 37, 38, 39, 40]; // Space, Left, Up, Right, Down
            if (keys.includes(e.keyCode)) {
                e.preventDefault();
            }
        });
    }

    // Function to re-enable scrolling after video ends
    function enableScroll() {
        // Remove scroll disabling class
        $('body').removeClass('disable-scroll');

        // Remove scroll prevention
        $(window).off('wheel.disableScroll');
        $(window).off('touchmove.disableScroll');
        $(document).off('keydown.disableScroll');
    }
});
