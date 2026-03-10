import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';
import { uploadToCloudinary } from '@/lib/cloudinary';

export async function POST(request: NextRequest) {
  console.log('🔄 Profile image upload request received');
  
  try {
    const token = request.headers.get('authorization')?.replace('Bearer ', '');
    if (!token) {
      console.log('❌ No authorization token provided');
      return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
    }

    const decoded = verifyToken(token);
    if (!decoded) {
      console.log('❌ Invalid token provided');
      return NextResponse.json({ success: false, message: 'Invalid token' }, { status: 401 });
    }

    console.log('✅ Token verified for user:', decoded.userId);

    const formData = await request.formData();
    const file = formData.get('image') as File;
    
    if (!file) {
      console.log('❌ No image file provided');
      return NextResponse.json({ success: false, message: 'No image provided' }, { status: 400 });
    }

    console.log('📁 File received:', {
      name: file.name,
      type: file.type,
      size: file.size
    });

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      console.log('❌ Invalid file type:', file.type);
      return NextResponse.json({ 
        success: false, 
        message: 'Invalid file type. Only JPEG, PNG, and WebP are allowed.' 
      }, { status: 400 });
    }

    // Validate file size (5MB limit)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      console.log('❌ File too large:', file.size);
      return NextResponse.json({ 
        success: false, 
        message: 'File too large. Maximum size is 5MB.' 
      }, { status: 400 });
    }

    // Convert file to buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    console.log('📦 Buffer created, size:', buffer.length);

    // Upload to Cloudinary
    console.log('🌤️ Starting Cloudinary upload...');
    const result = await uploadToCloudinary(buffer, {
      folder: 'mediexpress/profiles',
      resource_type: 'image',
      transformation: {
        width: 400,
        height: 400,
        crop: 'fill',
        quality: 'auto',
        format: 'webp'
      }
    });

    console.log('✅ Cloudinary upload successful:', result.secure_url);

    return NextResponse.json({
      success: true,
      data: { 
        imageUrl: result.secure_url,
        publicId: result.public_id
      },
      message: 'Image uploaded successfully',
    });
  } catch (error: any) {
    console.error('❌ Upload error details:', {
      message: error.message,
      stack: error.stack,
      name: error.name
    });
    
    return NextResponse.json(
      { 
        success: false, 
        message: `Failed to upload image: ${error.message}`,
        error: process.env.NODE_ENV === 'development' ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}
