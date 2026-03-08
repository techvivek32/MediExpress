export default function Home() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      backgroundColor: '#f5f7fa'
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '48px',
        borderRadius: '16px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        maxWidth: '600px'
      }}>
        <h1 style={{ 
          fontSize: '32px', 
          fontWeight: 'bold', 
          color: '#2E7D32',
          marginBottom: '16px'
        }}>
          💊 MediExpress API
        </h1>
        <p style={{ 
          fontSize: '18px', 
          color: '#757575',
          marginBottom: '32px'
        }}>
          Backend API for Prescription Medicine Delivery Platform
        </p>
        
        <div style={{
          backgroundColor: '#f5f7fa',
          padding: '24px',
          borderRadius: '12px',
          marginBottom: '24px',
          textAlign: 'left'
        }}>
          <h2 style={{ 
            fontSize: '16px', 
            fontWeight: '600', 
            color: '#212121',
            marginBottom: '12px'
          }}>
            API Endpoints:
          </h2>
          <ul style={{ 
            listStyle: 'none', 
            padding: 0,
            margin: 0,
            fontSize: '14px',
            color: '#757575'
          }}>
            <li style={{ marginBottom: '8px' }}>✓ POST /api/auth/register</li>
            <li style={{ marginBottom: '8px' }}>✓ POST /api/auth/login</li>
            <li style={{ marginBottom: '8px' }}>✓ POST /api/prescriptions/upload</li>
            <li style={{ marginBottom: '8px' }}>✓ GET /api/pharmacy/requests</li>
            <li style={{ marginBottom: '8px' }}>✓ POST /api/pharmacy/send-quote</li>
            <li style={{ marginBottom: '8px' }}>✓ POST /api/orders/confirm</li>
            <li style={{ marginBottom: '8px' }}>✓ GET /api/rider/nearby-deliveries</li>
          </ul>
        </div>

        <div style={{
          display: 'flex',
          gap: '12px',
          justifyContent: 'center'
        }}>
          <a 
            href="/api/health" 
            style={{
              padding: '12px 24px',
              backgroundColor: '#2E7D32',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '500'
            }}
          >
            Health Check
          </a>
          <a 
            href="https://github.com/yourusername/mediexpress" 
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '12px 24px',
              backgroundColor: 'white',
              color: '#2E7D32',
              textDecoration: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '500',
              border: '1px solid #2E7D32'
            }}
          >
            Documentation
          </a>
        </div>

        <p style={{ 
          fontSize: '12px', 
          color: '#BDBDBD',
          marginTop: '32px'
        }}>
          Version 1.0.0 • Running on Next.js 14
        </p>
      </div>
    </div>
  );
}
