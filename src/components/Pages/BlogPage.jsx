import React from "react";
import classes from "./BlogPage.module.css";
import { useParams } from "react-router-dom";
import blogImg from "../../Images/blog-test-img.jpeg";
import BlogCard from "../Cards/BlogCard";
import leftArrow from "../../Images/left-arrow.svg";
import rightArrow from "../../Images/right-arrow.svg";
import { Link } from "react-router-dom";
import backArrowIcon from "../../Images/back-arrow-2.svg";

import Header from "../Header";

const BlogPage = () => {
  const { id } = useParams();
  // console.log(a);
  return (
    <>
      <Header />
      <section className={classes["blog-section"]}>
        <Link className={classes["back-to-page-btn"]} to="/">
          <img src={backArrowIcon} alt="back arrow" />
        </Link>
        <img className={classes["blog-img"]} src={blogImg} alt="blog" />
        <h5 className={classes["blog-author"]}>ლილე კვარაცხელია</h5>
        <div className={classes["date-author-container"]}>
          <h6 className={classes["blog-date"]}>02.11.2023</h6>
          <h6>•</h6>
          <h6 className={classes["blog-author-email"]}>
            lile.kvaratskhelia@redberry.ge
          </h6>
        </div>
        <h1 className={classes["blog-title"]}>
          მობილური ფოტოგრაფიის კონკურსის გამარჯვებულთა ვინაობა ცნობილია
        </h1>

        <ul className={classes["categories-container"]}>
          <li className={`${classes["category"]} `}>მარკეტი</li>
          <li className={`${classes["category"]} `}>მარკეტი</li>
        </ul>

        <p className={classes["blog-description"]}>
          6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური
          სიზუსტისთვის, ეს პროცესი ორჯერ გაიმეორეს და ორივეჯერ იმ ყველს მიენიჭა
          უპირატესობა, რომელსაც ჰიპ-ჰოპს ასმენინებდნენ. „მუსიკალური ენერგია
          პირდაპირ ყველის შუაგულში რეზონირებდა“, — აღნიშნა ბერნის ხელოვნების
          უნივერსიტეტის წარმომადგენელმა, მაიკლ ჰერენბერგმა. რა თქმა უნდა, ეს
          ერთი კვლევა საკმარისი არ არის საბოლოო დასკვნების გამოსატანად.
          სანაცვლოდ, მეცნიერებს სურთ, უშუალოდ ჰიპ-ჰოპის ჟანრის სხვადასხვა მუსიკა
          მოასმენინონ რამდენიმე ყველს და უკვე ისინი შეაჯიბრონ ერთმანეთს. აქვე
          საგულისხმოა, რომ როგორც ბერნის მეცნიერები განმარტავენ, ექსპერიმენტს
          საფუძვლად არა ყველის გაუმჯობესებული წარმოება, არამედ კულტურული
          საკითხები დაედო. მათი თქმით, ადამიანებს უყვართ ყველი და მუსიკა,
          ამიტომაც საინტერესოა ამ ორის კავშირის დანახვა.
        </p>
      </section>
      <section className={classes["suggestion-section"]}>
        <div className={classes["section-first-line"]}>
          <h1 className={classes["suggestion-title"]}>მსგავსი სტატიები</h1>
          <div className={classes["slider-imgs"]}>
            <img src={leftArrow} alt="back arrow" />
            <img src={rightArrow} alt="back arrow" />
          </div>
        </div>
        <ul className={classes["blogs-container"]}>
          <li>shota</li>
          <li>shota</li>
          <li>shota</li>
        </ul>
      </section>
    </>
  );
};

export default BlogPage;
