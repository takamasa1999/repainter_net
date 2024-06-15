"use client";
import { CircularProgress, Container } from "@mui/material";
import { useEffect } from 'react';
import CompositionContainer from './CompositionContainer';
import { useCompositions } from './useCompositions';
import { useInView } from "react-intersection-observer";
import { Grid } from "@mui/material";

type Props = {
  params: { locale: string };
};


export default function Page({ params: { locale } }: Props) {
  const take = 2;
  const { ref, inView } = useInView({ threshold: 1 })
  const { compositions, loadMore, loading, hasMore } = useCompositions(locale, take)

  useEffect(() => {
    if (inView && !loading && hasMore) {
      loadMore()
    }
  }, [inView, loading, loadMore, hasMore])


  return (
    <Container>
      <Grid container spacing={2}>
        {
          compositions.map((data, key) => (
            <Grid item key={key} xs={12} md={6} lg={4}>
              <CompositionContainer
                url={data.url}
                title={data.title}
                description={data.description}
              />
            </Grid>
          ))
        }
        {loading &&
          // Array.from({ length: take }).map((_, index) => (
            <Grid item xs={12} md={6} lg={4}>
              <CircularProgress/>
            </Grid>
          // ))
        }
      </Grid>
      <div ref={ref} style={{ height: "1px" }} />
    </Container>
  );
}