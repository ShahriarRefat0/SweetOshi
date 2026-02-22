"use client";

import Image from "next/image";
import Link from "next/link";

const courses = [
  {
    title: "Vanilla Cake A-Z",
    desc: "Learn complete vanilla cake making from beginner to professional level.",
  },
  {
    title: "Chocolate Cake A-Z",
    desc: "Master rich chocolate cake, texture, baking and finishing.",
  },
  {
    title: "Frosting & Cream Work",
    desc: "Learn smooth frosting, cream consistency and decoration techniques.",
  },
  {
    title: "Cake Decoration",
    desc: "Professional piping, flower design and finishing styles.",
  },
  {
    title: "Jar Cake & Cupcake",
    desc: "Modern bakery trending items for business growth.",
  },
  {
    title: "Cake Business Tips",
    desc: "Pricing, packaging, and customer handling for home bakery.",
  },
];

export default function CoursesPage() {
  return (
    <main className="bg-white min-h-screen">

      {/* ================= HERO ================= */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Professional Baking Courses
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            Learn professional cake making from an experienced home baker.
            From beginner to advanced — start your baking journey today.
          </p>

          <div className="mt-6 flex gap-4">
            <Link
              href="#enroll"
              className="bg-pink-600 text-white px-6 py-3 rounded-xl hover:bg-pink-700 transition"
            >
              Enroll Now
            </Link>

            <Link
              href="/"
              className="border border-gray-300 px-6 py-3 rounded-xl hover:bg-gray-100 transition"
            >
              Back Home
            </Link>
          </div>
        </div>

        <div>
          <Image
            src="/courses/hero.jpg"
            alt="Baking Course"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg object-cover"
          />
        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}
      <section className="bg-pink-50 py-14">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">

          <Image
            src="/courses/instructor.jpg"
            alt="Instructor"
            width={500}
            height={400}
            className="rounded-2xl shadow-md object-cover"
          />

          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              About The Instructor
            </h2>

            <p className="mt-4 text-gray-700">
              Experienced home baker and business owner with real customer
              experience. She teaches practical baking techniques so students
              can start their own baking journey confidently.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700">
              <li>✔ Professional Home Baker</li>
              <li>✔ Real Client Order Experience</li>
              <li>✔ Hands-on Practical Training</li>
              <li>✔ Beginner Friendly Guidance</li>
              <li>✔ Business Tips Included</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= COURSE LIST ================= */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
          What You Will Learn
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {course.title}
              </h3>
              <p className="mt-3 text-gray-600">{course.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
            Course Moments
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            <Image
              src="/courses/1.jpg"
              alt="course"
              width={400}
              height={300}
              className="rounded-xl object-cover"
            />
            <Image
              src="/courses/2.jpg"
              alt="course"
              width={400}
              height={300}
              className="rounded-xl object-cover"
            />
            <Image
              src="/courses/3.jpg"
              alt="course"
              width={400}
              height={300}
              className="rounded-xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* ================= COURSE INFO ================= */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="bg-pink-50 p-8 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Course Information
          </h2>

          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <p>📍 Location: Rangpur</p>
            <p>🎓 Beginner Friendly</p>
            <p>📜 Certificate Included</p>
            <p>🧁 Hands-on Practice</p>
            <p>💬 Live Support</p>
            <p>💰 Advance Payment Required</p>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section id="enroll" className="bg-pink-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold">
            Ready to Start Your Baking Journey?
          </h2>

          <p className="mt-4 text-lg">
            Join our professional baking course and turn your passion into a business.
          </p>

          <a
            href="tel:01716799163"
            className="inline-block mt-6 bg-white text-pink-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
          >
            Call Now
          </a>
        </div>
      </section>
    </main>
  );
}