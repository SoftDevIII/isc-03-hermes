function fetchOptions({ url }: FetchOptionsProps): Promise<Option[]> {
  return fetch(url)
    .then(res => res.json())
    .then((res: Option[]) => res);
}

export default fetchOptions;
