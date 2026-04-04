import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting = false;
  submitMessage = '';
  submitMessageType: 'success' | 'error' | '' = '';

  constructor() {
    // Initialize EmailJS with your public key
    // You'll need to sign up at https://www.emailjs.com/ and get your keys
    emailjs.init('TnVzoooxpcB6EPhBB'); // Replace with your actual public key
  }

  onSubmit() {
    if (this.isSubmitting) {
      return;
    }

    if (!this.formData.name || !this.formData.email || !this.formData.subject || !this.formData.message) {
      this.showMessage('Please fill in all fields.', 'error');
      return;
    }

    const templateParams = {
      from_name: this.formData.name,
      from_email: this.formData.email,
      subject: this.formData.subject,
      message: this.formData.message,
      to_email: 'srahulkumar633@gmail.com'
    };

    // Show success immediately (optimistic UI) and reset the form right away
    this.showMessage('Message sent! I\'ll get back to you soon. 🎉', 'success');
    this.resetForm();

    // Send the email silently in the background
    emailjs
      .send(
        'service_3ykotqq',
        'template_t9f7wao',
        templateParams
      )
      .catch((error) => {
        console.error('Email send error (background):', error);
      });
  }

  private showMessage(message: string, type: 'success' | 'error') {
    this.submitMessage = message;
    this.submitMessageType = type;

    // Clear message after 5 seconds
    setTimeout(() => {
      this.submitMessage = '';
      this.submitMessageType = '';
    }, 5000);
  }

  private resetForm() {
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
}
