let display = document.getElementById("display");
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxddXwW6Woibs9-cTURwJIk5KaeYTZj7zrpOsirZXAQ_adO9vfYU_wJnjp5W4XuojjB/exec'
    const form = document.forms['submit-to-google-sheet']
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
    })

    function submit(){
        const msg = "Thank You For Subscribing!";
        display.innerHTML(msg);

    }