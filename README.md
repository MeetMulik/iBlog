<p align="center">
  <img src="https://www.pngitem.com/pimgs/m/197-1971055_blogger-logo-icons-no-attribution-white-blog-icon.png" width="150px" alt="iBlog Logo">
</p>

<h1 align="center">iBlog 🌐</h1>

<p align="center">
  <em>A dynamic and feature-rich blogging platform built with Next.js, NextAuth, and Cloudinary!</em>
</p>

<p align="center">
  <a href="https://github.com/MeetMulik/iBlog/stargazers">
    <img src="https://img.shields.io/github/stars/your-username/iblog.svg" alt="GitHub stars">
  </a>
  <a href="https://github.com/MeetMulik/iBlog/network">
    <img src="https://img.shields.io/github/forks/your-username/iblog.svg" alt="GitHub forks">
  </a>
  <a href="https://github.com/MeetMulik/iBlog/issues">
    <img src="https://img.shields.io/github/issues/your-username/iblog.svg" alt="GitHub issues">
  </a>
</p>


# iBlog🚀

## Description

iBlog is a dynamic and user-friendly blogging platform crafted with Next.js, NextAuth, and Cloudinary. Seamlessly combining secure user authentication with NextAuth, intuitive post management with Next.js, and visually appealing media enhancements through Cloudinary, iBlog empowers users to share their thoughts and stories effortlessly. From creating engaging posts to managing a personalized blog, iBlog provides a feature-rich and responsive experience. Deployed with Vercel, iBlog offers a robust and scalable solution for individuals seeking a modern and efficient platform for expressing their ideas and connecting with their audience. Elevate your blogging experience with iBlog! 🚀📝

## Table of Contents

- [Features](#features) 🌟
- [Authentication](#authentication) 🔒
- [Posts](#posts) 📝
- [Image Upload](#image-upload) 🌐
- [Getting Started](#getting-started) 🏁
- [Usage](#usage) 🛠️
- [Deployment](#deployment) 🚀
- [Built With](#built-with) 🔧
- [License](#license) 📜

## Features 🌟

- **Authentication:** Secure user authentication with NextAuth.
- **Posts:** Create, update, and delete posts with Next.js.
- **Image Upload:** Seamlessly upload and manage images on Cloudinary.

## Authentication 🔒

This project includes authentication powered by [NextAuth](https://next-auth.js.org/). Users can sign up, log in, and access protected routes.

## Posts 📝

Create, update, and delete posts with ease. Leverage Next.js for a smooth and efficient user experience.

## Image Upload 🌐

Images are seamlessly uploaded to [Cloudinary](https://cloudinary.com/) for optimal storage and retrieval. Enhance your posts with visually appealing media.


## Installation

1. Clone the repository:

```bash
git clone https://github.com/MeetMulik/iBlog.git
cd iBlog
```

2. Install the dependencies for both the frontend and backend:

```bash
# Install dependencies
cd iBlog
pnpm install

```

3. Set the environment variables for backend

```bash
GITHUB_CLIENT_ID=""
GITHUB_CLIENT_SECRET=""
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET=""
DATABASE_URL=""
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=""
CLOUDINARY_API_KEY=""
CLOUDINARY_API_SECRET=""
CLOUDINARY_UPLOAD_PRESET=""
```

## Usage

```bash

cd iBlog
pnpm dev

Open your browser and navigate to http://localhost:3000 to view the application.

```
## Deployment 🚀

This project is deployed using [Vercel](https://vercel.com/). 

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Click the "Deploy with Vercel" button above.
2. Follow the instructions to deploy your project.

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are greatly appreciated.

- If you have suggestions for adding or removing something, feel free to open an issue to discuss it, or directly create a pull request with the necessary changes.
- Create individual PR for each suggestion.

### Creating A Pull Request

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

