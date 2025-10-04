import { Button } from "@/components/ui/button";


const Home = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Button>
        Click me
      </Button>
      <Button size={"sm"}>
        Click me
      </Button>
      <Button size={"lg"}>
        Click me
      </Button>
    </div>
  );
}

export default Home;