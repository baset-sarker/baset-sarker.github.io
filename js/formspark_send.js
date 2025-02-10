
const FORMSPARK_ACTION_URL = "https://submit-form.com/WmUhP9YLf";
//   const FORMSPARK_ACTION_URL = "https://submit-form.com/echo";

  function contactForm() {
    contact_success = document.getElementById("contact_success");
    contact_success.innerHTML = "";
      return {
          data: {
              name: "",
              email: "",
              phone: "",
              message: "",
          },
          buttonText: "Submit",
          loading: false,
          async submit() {

              this.buttonText = "Submitting...";
              this.loading = true; 

              try {
                  const response = await fetch(FORMSPARK_ACTION_URL, {
                      method: "POST",
                      headers: {
                          "Content-Type": "application/json",
                          Accept: "application/json",
                      },
                      body: JSON.stringify(this.data),
                  });

                  if (!response.ok) {
                      throw new Error("Failed to submit the form");
                  }

                  alert("Form submitted successfully!");
                  this.resetForm();
              } catch (error) {
                  alert("Something went wrong: please try again later ");
                  console.error("Form submission error:", error);
              } finally {
                  this.buttonText = "Submit";
                  this.loading = false;
              }
          },
          resetForm() {
              this.data.name = "";
              this.data.email = "";
              this.data.phone = "";
              this.data.message = "";
              contact_success.innerHTML = "Thank you for your message. We will get back to you soon.";
          }
      };
  }
