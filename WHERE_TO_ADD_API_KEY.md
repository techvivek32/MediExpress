# Where to Add Google Maps API Key

## 📂 File Location

```
apps/patient_app/android/app/src/main/AndroidManifest.xml
```

---

## 🔍 Find This Section

Look for this in the file (near the end):

```xml
        <meta-data
            android:name="flutterEmbedding"
            android:value="2" />
        
        <!-- Google Maps API Key -->
        <meta-data
            android:name="com.google.android.geo.API_KEY"
            android:value="YOUR_GOOGLE_MAPS_API_KEY_HERE"/>
    </application>
```

---

## ✏️ Replace This Line

**BEFORE:**
```xml
android:value="YOUR_GOOGLE_MAPS_API_KEY_HERE"/>
```

**AFTER:**
```xml
android:value="AIzaSyABC123XYZ...YOUR_ACTUAL_KEY"/>
```

---

## 📋 Example

If your API key is: `AIzaSyDXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`

Then it should look like:

```xml
        <!-- Google Maps API Key -->
        <meta-data
            android:name="com.google.android.geo.API_KEY"
            android:value="AIzaSyDXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"/>
    </application>
```

---

## ⚠️ Important

1. **Keep the quotes**: `android:value="YOUR_KEY"`
2. **Don't add spaces**: No spaces before or after the key
3. **Save the file**: Ctrl+S or Cmd+S
4. **Don't share**: Keep your API key private

---

## ✅ After Adding

1. Save the file
2. Run: `BUILD_APK.bat`
3. Install APK on phone
4. Test the map feature

---

## 🎯 Visual Guide

```
AndroidManifest.xml
│
├── <manifest>
│   ├── <uses-permission> (Internet, Location, etc.)
│   │
│   └── <application>
│       ├── <activity> (MainActivity)
│       │
│       ├── <meta-data> (flutterEmbedding)
│       │
│       └── <meta-data> ← ADD YOUR API KEY HERE
│           android:name="com.google.android.geo.API_KEY"
│           android:value="YOUR_KEY" ← REPLACE THIS
│
└── </manifest>
```

---

## 🔗 Get Your API Key

1. Go to: https://console.cloud.google.com/
2. Create project: "MediExpress"
3. Enable: Maps SDK for Android
4. Create API key
5. Copy the key
6. Paste it in AndroidManifest.xml

**Detailed guide**: `API_KEY_SETUP.md`

---

**That's it! Just one line to change! 🎉**
