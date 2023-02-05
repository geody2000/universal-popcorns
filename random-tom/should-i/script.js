$(document).ready(function() {
    // Add options to dropdown menu
    shouldOptions.forEach(function(option) {
      $("#should-options").append("<option>" + option + "</option>");
    });
  
    $("#ask-tom-button").click(function() {
      var selectedOption = $("#should-options").val();
      
      // Remove dropdown menu and button
      $("#heading").remove();
      $("#paragraph").remove();
      $("#should-options").remove();
      $("#ask-tom-button").remove();
      
      // Display selected option and random sentence
      var randomSentence = randomSentences[Math.floor(Math.random() * randomSentences.length)];
      $("#output-question").html("<p>Should I " + selectedOption + "</p><p>");
      $("#output-answer").html("<p>" + randomSentence + "</p>");
      
      // Add "Ask Again" button
      $("#output-answer").append("<br><br><button id='ask-again-button'>Ask Again</button>");
      
      $("#ask-again-button").click(function() {
        location.reload();
      });
    });
  });
  