import Image from "next/image";
import { Container } from "@/components/container";

const publicSchools = [
  "8.png",
  "7.png",
  "13.png",
  "3.png",
  "1-150x150.png",
  "5.png",
  "6.png",
  "2.png",
  "9.png",
  "11.png",
  "12.png",
  "10.png",
  "14-1.jpg",
];

const privateSchools = [
  "13-1.png",
  "1-1.png",
  "9-1.png",
  "11-1.png",
  "16.png",
  "15.jpg",
  "17.png",
  "18.jpg",
  "19.jpg",
  "20.jpg",
  "12-2.png",
  "7-1.png",
  "3-1.png",
  "4-1.png",
  "5-1.png",
  "6-1.png",
  "14-1.png",
  "10-1.png",
  "8-1.png",
  "2-1.png",
];

function LogoRow({ files }: { files: string[] }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      {files.map((file) => (
        <div
          key={file}
          className="relative flex size-16 items-center justify-center rounded-xl border border-border bg-background p-2 sm:size-20"
        >
          <Image
            src={`/images/home/${file}`}
            alt=""
            fill
            className="object-contain p-2"
          />
        </div>
      ))}
    </div>
  );
}

export function AlumniSchools() {
  return (
    <section className="py-16">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Where MGA Alumni Are Studying
          </h2>
        </div>
        <div className="mt-10 flex flex-col gap-8">
          <div>
            <p className="mb-4 text-center text-sm font-semibold text-muted-foreground">
              Public School
            </p>
            <LogoRow files={publicSchools} />
          </div>
          <div>
            <p className="mb-4 text-center text-sm font-semibold text-muted-foreground">
              Private School
            </p>
            <LogoRow files={privateSchools} />
          </div>
        </div>
      </Container>
    </section>
  );
}
