<script setup>
  import { ref, onMounted } from 'vue'
  import { useRouter } from 'vue-router'
  import QrcodeVue from 'qrcode.vue'
  import html2canvas from 'html2canvas'
  import jsPDF from 'jspdf'

  const router = useRouter()

  const bookingData = ref([{}])
  const userData = ref({})
  const showQR = ref(false) // helps to prevent errors

  onMounted(() => {
    const booking = localStorage.getItem('finalBooking')
    if (booking) {
      bookingData.value = JSON.parse(booking)
    }

    const user = localStorage.getItem('bookuser')
    if (user) {
      userData.value = JSON.parse(user)
    }

    const newBooking = {
      ...bookingData.value,
      user: userData.value,
      status: 'Paid',
      bookedAt: new Date().toISOString()
    }

    // Read existing booked array from localStorage or initialize empty
    let bookedArray = []
    /*const existingBooked = localStorage.getItem('booked')
    if (existingBooked) {
      try {
        bookedArray = JSON.parse(existingBooked)
        if (!Array.isArray(bookedArray)) {
          bookedArray = []
        }
      } catch {
        bookedArray = []
      }
    }*/

    // Add new booking to array
    bookedArray.push(newBooking)

    // Save updated array back to localStorage
    localStorage.setItem('booked', JSON.stringify(bookedArray))

    alert('Payment Successful! Booking Confirmed.')

    showQR.value = true
  })

  function closer() {
    router.push('/main/home')
  }

  const generateQRdata = () => {
    if (!userData.value || !bookingData.value) return ''
    return `
Movie: ${userData.value.movie}
Theater: ${bookingData.value.theatername}, ${bookingData.value.tplace}
Date: ${bookingData.value.date}
Time: ${bookingData.value.time}
Seats: ${bookingData.value.seats?.join(', ')}
Amount: ₹${bookingData.value.totalAmount}
  `.trim()
  }
  async function downloadPDF() {
    const pdfContent = document.getElementById('pdf-content')

    // Capture content as canvas
    const canvas = await html2canvas(pdfContent, {
      scale: 2,
      useCORS: true,
    })

    const imgData = canvas.toDataURL('image/png')

    // Create jsPDF instance - A4 portrait, units in points
    const pdf = new jsPDF({
      unit: 'pt',
      format: 'a4',
    })

    // Define margin for all sides (left, right, top, bottom)
    const margin = 20

    // Available width and height inside the page after margins
    const pdfWidth = pdf.internal.pageSize.getWidth() - margin * 2
    const pdfHeight = pdf.internal.pageSize.getHeight() - margin * 2

    // Original canvas image dimensions
    const imgWidth = canvas.width
    const imgHeight = canvas.height

    // Calculate scale ratio to fit image inside the PDF page considering margins
    const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight)

    // Scaled image dimensions for PDF
    const imgPDFWidth = imgWidth * ratio
    const imgPDFHeight = imgHeight * ratio

    // Calculate x,y to center the image inside the PDF page with margin
    const x = margin + (pdfWidth - imgPDFWidth) / 2
    const y = margin + (pdfHeight - imgPDFHeight) / 2

    // Add image to PDF
    pdf.addImage(imgData, 'PNG', x, y, imgPDFWidth, imgPDFHeight)

    // Save PDF file
    pdf.save('booking-summary.pdf')
  }

  

  
</script>
<template>
  <div class="payment-container">

    <!-- ✅ PDF content only starts here -->
    <div id="pdf-content">
      <h2>Payment Summary</h2>

      <div class="section">
        <img :src="userData.image" alt="User" width="100" />
      </div>

      <div class="section">
        <p><strong>{{ userData.movie }}</strong></p>
        <p><strong>Theater:</strong> {{ bookingData.theatername }}, {{ bookingData.tplace }}</p>
        <p><strong>Date:</strong> {{ bookingData.date }}</p>
        <p><strong>Time:</strong> {{ bookingData.time }}</p>
        <p><strong>Seats:</strong> {{ bookingData.seats?.join(', ') }}</p>
        <p><strong>Total Amount:</strong> ₹{{ bookingData.totalAmount }}</p>
      </div>

      <div class="qr-wrapper">
        <p><strong>Scan QR for Booking Details:</strong></p>
       
        <QrcodeVue :value="generateQRdata()" :size="120" />
      </div>
    </div>
    <!-- ✅ PDF content ends here -->
    <!-- ❌ These buttons will not appear in the PDF -->
    <div class="butter">
      <button class="down" @click="downloadPDF">Download</button>
      <button class="cls" @click="closer">Close</button>
    </div>

  </div>
</template>

<style scoped>
  .payment-container {
    width: 500px;
    padding: 30px;
    margin: auto;
    border: 1px solid #ccc;
    border-radius: 10px;
    font-family: sans-serif;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .section {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    border-radius: 10px;
    margin-top: 10px;
    max-width: 100px;
  }

  .butter {
    display: flex;
    gap: 10px;
  }

  .pay-button {
    background-color: green;
    padding: 12px 24px;
    font-size: 16px;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

    .pay-button:hover {
      background-color: darkgreen;
    }

  .down {
    background-color: dodgerblue;
    padding: 12px 24px;
    font-size: 16px;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

    .down:hover {
      background-color: blue;
    }

  .cls {
    background-color: orangered;
    padding: 12px 24px;
    font-size: 16px;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

    .cls:hover {
      background-color: crimson;
    }
    
  


</style>
