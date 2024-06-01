export async function paymentLogic(amount, timeLimit, serviceTitle) {
  console.log(amount, timeLimit, serviceTitle);

  const dataToSend = {
    amount,
    // ... other product details (if needed)
  };

  try {
    const response = await fetch("http://localhost:3000/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataToSend),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const backendResponse = await response.json();
    console.log(backendResponse.orderId, "ayush2");
    // return;

    let orderId = backendResponse.orderId;

    await handlePayment(orderId, amount, timeLimit, serviceTitle);

    // return backendResponse; // Return response data
  } catch (error) {
    console.error("Error sending data to backend:", error);
    throw error;
  }
}

async function handlePayment(orderId, amount, timeLimit, serviceTitle) {
  const options = {
    key: "rzp_test_sE2cnTd5DL3JHm",
    currency: "INR",
    name: "Addy Fitness",
    order_id: orderId,
    description: timeLimit + " " + serviceTitle,
  };

  var rzp1 = new Razorpay(options);
  rzp1.open();
}
