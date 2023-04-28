import { SERVER_ADDRESS } from "./serverConstants";
import { getCookie } from "./cookies";

export async function fetchCreateLargeQuoteRequest(data) {
    try {
      const response = await fetch(`${SERVER_ADDRESS}/api/customer/create-large-quote-request/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFTOKEN' : getCookie('csrftoken'),
        },
        body: JSON.stringify(data),
      });
  
      return response;
    } catch (error) {
      throw error;
    }
}

export async function fetchCreateCustomerFeedback(data) {
    try {
      const response = await fetch(`${SERVER_ADDRESS}/api/customer/create-customer-feedback/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFTOKEN' : getCookie('csrftoken'),
        },
        body: JSON.stringify(data),
      });
  
      return response;
    } catch (error) {
      throw error;
    }
}

export async function fetchCreateSupportTicket(data) {
    try {
      const response = await fetch(`${SERVER_ADDRESS}/api/customer/create-support-ticket/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFTOKEN' : getCookie('csrftoken'),
        },
        body: JSON.stringify(data),
      });
  
      return response;
    } catch (error) {
      throw error;
    }
  }

  export async function fetchCreateBulkRequest(data) {
    try {
      const response = await fetch(`${SERVER_ADDRESS}/api/customer/create-bulk-request/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFTOKEN': getCookie('csrftoken'),
        },
        body: JSON.stringify(data),
      });
  
      return response;
    } catch (error) {
      throw error;
    }
  }