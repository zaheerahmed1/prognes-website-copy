"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  creativeCategories,
  creativeProjects,
  type CreativeCategory,
  type CreativeProject,
} from "@/content/creative-portfolio";
import { routes } from "@/content/nav";
import { Section } from "@/components/primitives/Section/Section";
import { Container } from "@/components/primitives/Grid/Grid";
import { Eyebrow } from "@/components/primitives/Eyebrow/Eyebrow";
import { Heading } from "@/components/primitives/Heading/Heading";
import { VideoPlayer } from "@/components/media/VideoPlayer";
import { FinalCTA } from "@/components/cta/FinalCTA";
import styles from "./page.module.css";

export default function CreativeWorkPage() {
  const [selectedCategory, setSelectedCategory] =
    useState<CreativeCategory>("All Work");
  const [activeModalProject, setActiveModalProject] =
    useState<CreativeProject | null>(null);

  const filteredProjects =
    selectedCategory === "All Work"
      ? creativeProjects
      : creativeProjects.filter((p) => p.category === selectedCategory);

  return (
    <main id="main">
      <Section id="creative-work" className={styles.section} spacing="large">
        <Container>
          {/* Header */}
          <div className={styles.header}>
            <div className={styles.navigationRow}>
              <Link href={routes.work} className={styles.backLink}>
                &larr; Back to Work Gateway
              </Link>
            </div>

            <Eyebrow className={styles.eyebrow}>
              <span className={styles.eyebrowDot} aria-hidden="true" />
              Growth &amp; Creative Portfolio
            </Eyebrow>

            <Heading variant="h1" className={styles.headline}>
              Creative Production &amp; Visual Campaigns.
            </Heading>

            <p className={styles.subtext}>
              Explore our CGI product advertisements, vertical AI UGC formats, commercial films, and studio product photography. All projects represent conceptual campaign developments and speculative creative passes.
            </p>

            {/* Category Filter Tabs */}
            <div
              className={styles.tabBar}
              role="tablist"
              aria-label="Filter creative projects"
            >
              {creativeCategories.map((cat) => (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={selectedCategory === cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`${styles.tabBtn} ${
                    selectedCategory === cat ? styles.tabBtnActive : ""
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className={styles.projectsGrid}>
            {filteredProjects.map((project) => (
              <article key={project.id} className={styles.projectCard}>
                <div className={styles.mediaContainer}>
                  {project.mediaType === "video" ? (
                    <VideoPlayer
                      src={project.src}
                      poster={project.poster}
                      aspectRatio={project.aspectRatio}
                      title={project.title}
                    />
                  ) : (
                    <div
                      className={`${styles.imageWrap} ${
                        project.aspectRatio === "4/5" ? styles.aspect4x5 : styles.aspect16x9
                      }`}
                      onClick={() => setActiveModalProject(project)}
                    >
                      <Image
                        src={project.src}
                        alt={`${project.title} — ${project.category}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className={styles.stillImg}
                      />
                    </div>
                  )}
                </div>

                <div className={styles.cardContent}>
                  <div className={styles.cardHeader}>
                    <span className={styles.cardCategory}>{project.category}</span>
                    <h2 className={styles.cardTitle}>{project.title}</h2>
                  </div>

                  <p className={styles.cardDesc}>{project.description}</p>

                  <div className={styles.deliverablesList}>
                    {project.deliverables.map((item) => (
                      <span key={item} className={styles.deliverablePill}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* Image Detail Modal */}
      {activeModalProject && (
        <div
          className={styles.modalBackdrop}
          onClick={() => setActiveModalProject(null)}
          role="dialog"
          aria-modal="true"
          aria-label={activeModalProject.title}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModalProject(null)}
              className={styles.closeBtn}
              aria-label="Close modal"
            >
              &times;
            </button>

            <div className={styles.modalImageWrap}>
              <Image
                src={activeModalProject.src}
                alt={activeModalProject.title}
                fill
                sizes="90vw"
                className={styles.modalImg}
              />
            </div>

            <div className={styles.modalMeta}>
              <div className={styles.modalHeader}>
                <span className={styles.cardCategory}>
                  {activeModalProject.category}
                </span>
                <h3 className={styles.modalTitle}>{activeModalProject.title}</h3>
              </div>
              <p className={styles.cardDesc}>{activeModalProject.description}</p>
            </div>
          </div>
        </div>
      )}

      <FinalCTA />
    </main>
  );
}

