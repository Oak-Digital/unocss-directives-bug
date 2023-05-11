const IndexPage = () => {
  return <div>
    <h1>
      Hello UnoCSS!
    </h1>
    <h1 className="bg-blue-500">
      Hello UnoCSS!
    </h1>

    <style jsx>{`
      h1 {
        @apply bg-red-500;
        font-weight: 700;
      }
    `}</style>
  </div>
};

export default IndexPage;
