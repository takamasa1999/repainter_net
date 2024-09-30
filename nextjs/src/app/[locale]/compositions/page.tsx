"use client";
import { CircularProgress, Container } from "@mui/material";
import { useEffect } from 'react';
import CompositionContainer from './CompositionContainer';
import { useScreenButtomStore } from "@/stores/useScreenButtomStore";
import { Grid } from "@mui/material";
import { usePaginatedData } from '../../../hooks/usePaginatedData';
import getCompositions from "./getCompositions";

type Props = {
  params: { locale: string };
};


export default function Page({ params: { locale } }: Props) {
  const take = 2;
  // const { compositions, loadMore, loading, hasMore } = useCompositions(locale, take)
  const { isScreenButtom } = useScreenButtomStore()
  const { data, loadMore, hasMore, loading } = usePaginatedData(
    getCompositions, {locale: locale, skip: 0,take: take}
  )

  useEffect(() => {
    if (isScreenButtom && hasMore) {
      loadMore()
    }
  }, [isScreenButtom, hasMore, loadMore])


  return (
    <Container>
      <Grid container spacing={2}>
        {
          data.map((data, key) => (
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
            <CircularProgress />
          </Grid>
          // ))
        }
      </Grid>
    </Container>
  );
}