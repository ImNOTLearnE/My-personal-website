import { useRef, useEffect, useState, useCallback } from "react";
import {
  Box,
  Typography,
  Chip,
  Button,
  IconButton,
  Card,
  CardContent,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import "../styles/showProjects.scss";
import WebStore from "../assets/Web store.png";
import Portfolio from "../assets/Portfoilo.png";

// ── Types ──────────────────────────────────────────────────
interface Project {
  id: number;
  title: string;
  desc: string;
  tech: string[];
  img: string;
  demo: string;
  repo: string;
}

interface ShowProjectsProps {
  autoPlay?: boolean;
  interval?: number;
  projects?: Project[];
}

// ── Default data ───────────────────────────────────────────
const DEFAULT_PROJECTS: Project[] = [
  // {
  //   id: 1,
  //   title: "E-Commerce Store",
  //   desc: "An online shop for modern products.",
  //   tech: ["React", "Next.js", "Node.js"],
  //   img: "https://tse3.mm.bing.net/th/id/OIP.FdV-QbLhp-r9B7_Rz9Lu-gHaEJ?rs=1&pid=ImgDetMain&o=7&rm=3",
  //   demo: "#",
  //   repo: "#",
  // },
  {
    id: 1,
    title: "E-commerce Store",
    desc: "A productivity app to manage your tasks.",
    tech: ["HTML", "CSS", "Vue", "TypeScript", "React", "NodeJS"],
    img: WebStore,
    demo: "#",
    repo: "#",
  },
  {
    id: 2,
    title: "Portfolio Website",
    desc: "My personal portfolio website.",
    tech: ["HTML", "CSS", "Vue", "TypeScript", "React", "NodeJS"],
    img: Portfolio,
    demo: "#",
    repo: "#",
  },
  // {
  //   id: 4,
  //   title: "Weather App",
  //   desc: "A weather forecasting application.",
  //   tech: ["JavaScript", "OpenWeather API"],
  //   img: "https://tse3.mm.bing.net/th/id/OIP.FdV-QbLhp-r9B7_Rz9Lu-gHaEJ?rs=1&pid=ImgDetMain&o=7&rm=3",
  //   demo: "#",
  //   repo: "#",
  // },
  // {
  //   id: 5,
  //   title: "Chat Application",
  //   desc: "Real-time messaging with rooms & presence.",
  //   tech: ["Socket.io", "Express", "MongoDB"],
  //   img: "https://tse3.mm.bing.net/th/id/OIP.FdV-QbLhp-r9B7_Rz9Lu-gHaEJ?rs=1&pid=ImgDetMain&o=7&rm=3",
  //   demo: "#",
  //   repo: "#",
  // },
];

// ── Helpers ────────────────────────────────────────────────
const wrap = (index: number, length: number): number =>
  ((index % length) + length) % length;

const getEffectiveDiff = (i: number, active: number, total: number): number => {
  const diff = Math.abs(i - active);
  return Math.min(diff, Math.abs(diff - total));
};

const getCardClass = (i: number, active: number, total: number): string => {
  const d = getEffectiveDiff(i, active, total);
  if (d === 0) return "project-card project-card--active";
  if (d === 1) return "project-card project-card--side";
  return "project-card project-card--far";
};

// ── Component ──────────────────────────────────────────────
export default function ShowProjects({
  // autoPlay = false,
  // interval = 4500,
  projects = DEFAULT_PROJECTS,
}: ShowProjectsProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const isDragging = useRef<boolean>(false);
  const dragStartX = useRef<number>(0);
  const dragScrollLeft = useRef<number>(0);

  const [active, setActive] = useState<number>(2);
  // const [isPlaying, setIsPlaying] = useState<boolean>(autoPlay);

  const total = projects.length;

  // ── Scroll to index ──────────────────────────────────────
  const scrollToIndex = useCallback(
    (index: number): void => {
      const el = scrollerRef.current;
      if (!el) return;
      const clamped = wrap(index, total);
      const cards = Array.from<HTMLElement>(
        el.querySelectorAll(".project-card"),
      );
      const target = cards[clamped];
      if (!target) return;
      const offset =
        target.offsetLeft - (el.clientWidth - target.offsetWidth) / 2;
      el.scrollTo({ left: offset, behavior: "smooth" });
      setActive(clamped);
    },
    [total],
  );

  // ── Detect nearest card on scroll ───────────────────────
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const onScroll = (): void => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const cards = Array.from<HTMLElement>(
          el.querySelectorAll(".project-card"),
        );
        const centerX = el.getBoundingClientRect().left + el.clientWidth / 2;
        let nearest = 0;
        let minDist = Infinity;
        cards.forEach((c, i) => {
          const rect = c.getBoundingClientRect();
          const dist = Math.abs(rect.left + rect.width / 2 - centerX);
          if (dist < minDist) {
            minDist = dist;
            nearest = i;
          }
        });
        setActive(nearest);
      });
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // init
    return () => {
      el.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // ── Autoplay ─────────────────────────────────────────────
  // useEffect(() => {
  //   if (!isPlaying) return;
  //   const id = setInterval(() => scrollToIndex(active + 1), interval);
  //   return () => clearInterval(id);
  // }, [isPlaying, active, interval, scrollToIndex]);

  // ── Drag to scroll ───────────────────────────────────────
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const onMouseDown = (e: MouseEvent): void => {
      isDragging.current = false;
      dragStartX.current = e.clientX;
      dragScrollLeft.current = el.scrollLeft;
      el.classList.add("is-dragging");

      const onMouseMove = (ev: MouseEvent): void => {
        // console.log(dragStartX);
        const dx = ev.clientX - dragStartX.current;
        if (Math.abs(dx) > 4) isDragging.current = true;
        el.scrollLeft = dragScrollLeft.current - dx;
      };

      const onMouseUp = (): void => {
        el.classList.remove("is-dragging");
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
        if (isDragging.current) snapToNearest();
      };

      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    };

    const snapToNearest = (): void => {
      const cards = Array.from<HTMLElement>(
        el.querySelectorAll(".project-card"),
      );
      const cx = el.getBoundingClientRect().left + el.clientWidth / 2;
      let nearest = 0;
      let min = Infinity;
      cards.forEach((c, i) => {
        const r = c.getBoundingClientRect();
        const d = Math.abs(r.left + r.width / 2 - cx);
        if (d < min) {
          min = d;
          nearest = i;
        }
      });
      scrollToIndex(nearest);
    };

    el.addEventListener("mousedown", onMouseDown);
    return () => el.removeEventListener("mousedown", onMouseDown);
  }, [scrollToIndex]);

  // ── Touch swipe ──────────────────────────────────────────
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    let touchStartX = 0;

    const onTouchStart = (e: TouchEvent): void => {
      touchStartX = e.touches[0].clientX;
    };
    const onTouchEnd = (e: TouchEvent): void => {
      const dx = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(dx) > 40) scrollToIndex(active + (dx < 0 ? 1 : -1));
    };

    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, [active, scrollToIndex]);

  // ── Init scroll ──────────────────────────────────────────
  useEffect(() => {
    requestAnimationFrame(() => scrollToIndex(2));
  }, [scrollToIndex]);

  // ── Render ───────────────────────────────────────────────
  return (
    <Box component="section" className="projects-section">
      {/* ── Header ── */}
      <Box className="projects-header">
        <Typography variant="h2" className="projects-title">
          Projects
        </Typography>
        <Typography className="projects-count">
          {String(active + 1).padStart(2, "0")} /{" "}
          {String(total).padStart(2, "0")}
        </Typography>
      </Box>

      {/* ── Slider ── */}
      <Box className="scroller-wrapper">
        <Box ref={scrollerRef} className="projects-scroller">
          {projects.map((p, i) => (
            <Card
              key={p.id}
              className={getCardClass(i, active, total)}
              onClick={() => {
                if (!isDragging.current) scrollToIndex(i);
              }}
              aria-hidden={i !== active}
              elevation={0}
              sx={{
                background: " rgba(255, 255, 255, 0.1) !important",
                boxShadow:
                  "0 20px 40px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2) !important",
                border: "1px solid rgba(255, 255, 255, 0.2) !important",

                // backgroundColor: "transparent !important",op00000
              }}
            >
              {/* Image */}
              <Box className="card-media">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  draggable={false}
                />
                <Box className="card-media-overlay" />
                <Typography className="card-badge">
                  {String(p.id).padStart(2, "0")}
                </Typography>
              </Box>

              {/* Content */}
              <CardContent className="card-body" sx={{ p: 0 }}>
                <Typography className="card-title">{p.title}</Typography>
                <Typography className="card-desc">{p.desc}</Typography>

                {/* Tech tags */}
                <Box className="tags-row">
                  {p.tech.map((t) => (
                    <Chip key={t} label={t} size="small" className="tech-tag" />
                  ))}
                </Box>

                {/* Actions */}
                <Box className="card-actions">
                  <Button
                    href={p.demo}
                    variant="contained"
                    size="small"
                    className="btn-demo"
                    endIcon={
                      <OpenInNewIcon sx={{ fontSize: "0.8rem !important" }} />
                    }
                    disableElevation
                  >
                    Live Demo
                  </Button>
                  <Button
                    href={p.repo}
                    variant="outlined"
                    size="small"
                    startIcon={
                      <GitHubIcon sx={{ fontSize: "0.9rem !important" }} />
                    }
                    className="btn-github"
                  >
                    GitHub
                  </Button>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* ── Arrow nav ── */}
        <Box className="nav-arrow nav-arrow--right">
          <IconButton
            className="arrow-btn"
            onClick={() => scrollToIndex(active - 1)}
            aria-label="Previous project"
          >
            <ChevronLeftIcon fontSize="small" />
          </IconButton>
          <IconButton
            className="arrow-btn"
            onClick={() => scrollToIndex(active + 1)}
            aria-label="Next project"
          >
            <ChevronRightIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>

      {/* ── Progress bar ── */}
      {/* <Box className="progress-bar-wrap">
        <Box className="progress-bar">
          <Box
            className="progress-fill"
            style={{ width: `${((active + 1) / total) * 100}%` }}
          />
        </Box>
      </Box> */}

      {/* ── Dot indicators ── */}
      <Box className="dot-indicators">
        {projects.map((_, i) => (
          <Box
            key={i}
            role="button"
            tabIndex={0}
            aria-label={`Go to project ${i + 1}`}
            className={`dot${i === active ? " dot--active" : ""}`}
            onClick={() => scrollToIndex(i)}
            onKeyDown={(e) => e.key === "Enter" && scrollToIndex(i)}
          />
        ))}
      </Box>
    </Box>
  );
}
