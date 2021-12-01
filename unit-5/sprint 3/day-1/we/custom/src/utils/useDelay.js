export function useDelay(delay) {
  const [render, setRender] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setRender(true);
    }, delay * 1000)
    return () => clearInterval(timer);
  }, [delay])
  return render;
}