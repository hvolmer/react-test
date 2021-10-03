import { Breadcrumb, BreadcrumbItem } from "react-bootstrap";
import { Route, useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Species } from "../types/species";

export function AppBreadcrumbs(props: { species: Species[] }) {

  const query = new URLSearchParams(useLocation().search);
  const sUrl = query.get('species') || '';
  const species = props.species.find(s => s.url === sUrl);
  if (!species) { throw new Error('Cannot find species'); }

  return (
    <Breadcrumb>
      <Route path="/">
        <BreadcrumbItem linkAs={Link} linkProps={{ to: '/' }}>Species</BreadcrumbItem>
      </Route>
      <Route path="/characters">
        <BreadcrumbItem>{species.name} Characters</BreadcrumbItem>
      </Route>
      <Route path="/characters/:characterId">
        <BreadcrumbItem>(name) Detail</BreadcrumbItem>
      </Route>
    </Breadcrumb>
  );
}