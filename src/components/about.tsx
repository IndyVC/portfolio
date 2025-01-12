import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-20">
      <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        About Me
      </h2>
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle>My Journey</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="p-2">
            Senior Fullstack Developer with 6+ years of experience specializing
            in modern TypeScript ecosystems and AI-integrated solutions. I bring
            hands-on expertise in building scalable applications, having worked
            with innovative companies like Faktion (AI Solutions) and
            contributed to Metamaze&apos;s growth before its successful
            acquisition by Duco.
          </p>
          <p className="p-2">Technical Focus:</p>
          <ul className="list-disc ml-8">
            <li className="list-item">
              Full TypeScript/Node.js stack expertise
            </li>
            <li className="list-item">GraphQL API design and implementation</li>
            <li className="list-item">
              Modern frontend development with React and Vue.js
            </li>
            <li className="list-item">UI excellence using Tailwind CSS</li>
            <li className="list-item">
              Enterprise-grade applications and ERP systems
            </li>
          </ul>

          <p className="p-2">
            My journey includes transforming complex business requirements into
            elegant solutions across diverse sectors - from AI automation
            platforms to enterprise resource planning systems. I&apos;ve
            consistently delivered high-impact results while adapting to rapid
            technological changes and company acquisitions.
          </p>
          <p className="p-2">
            Based in Belgium, I combine technical excellence with strong
            communication skills developed through years of both technical and
            customer-facing roles. I&apos;m passionate about creating clean,
            maintainable code and bringing innovative solutions to challenging
            problems.
          </p>
          <p className="p-2">
            Currently exploring new challenges where I can leverage my expertise
            in fullstack development and modern tech stacks to deliver
            exceptional value.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
