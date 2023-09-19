function createTofaButton(options) {
  const {
    label,
    className,
    apiKey,
    redirectBackLink,
    name,
    address,
    phone,
    email,
  } = options;
  const buttonClass = `tofaButton ${className || ""}`;

  const handleCheckout = () => {
    if (!redirectBackLink) {
      return alert("Redirect link is required");
    }
    if (!apiKey) {
      return alert("Api key is required");
    }

    if (!name) {
      return alert("Name is required");
    }

    if (!email) {
      return alert("Email is required");
    }

    const encodedApiKey = encodeURIComponent(apiKey);
    const encodedRedirectBackLink = encodeURIComponent(redirectBackLink);
    const encodedEmail = encodeURIComponent(email);
    const encodedName = encodeURIComponent(name);
    const encodedAddress = encodeURIComponent(address || "");
    const encodedPhone = encodeURIComponent(phone || "");

    const redirectUrl = `https://www.quicklogisticshub.com/tofa_redirect/?apiKey=${encodedApiKey}&redirectBackLink=${encodedRedirectBackLink}&name=${encodedName}&address=${encodedAddress}&phone=${encodedPhone}&email=${encodedEmail}`;
    window.location.href = redirectUrl;
  };

  // Create a button element and attach the click event
  const button = document.createElement("button");
  button.textContent = label || "Default Text";
  button.className = buttonClass;
  button.addEventListener("click", handleCheckout);

  // Return the button element
  return button;
}
