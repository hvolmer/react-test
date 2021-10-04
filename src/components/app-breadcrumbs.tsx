import { useContext } from "react";
import { Breadcrumb, BreadcrumbItem } from "react-bootstrap";
import { Route } from "react-router";
import { Link } from "react-router-dom";
import { AppContext } from "./app";

/**
 * Breadcrumb-style navigation through data
 */
export function AppBreadcrumbs() {
  const appContext = useContext(AppContext);

  let speciesLink = '/';
  if (appContext.selectedSpecies) {
    speciesLink =
      `/characters?species=${encodeURIComponent(appContext.selectedSpecies.url)}`;
  }

  return (
    <>
      <div className="d-inline-block">
        <Breadcrumb>
          <Route path="/">
            <BreadcrumbItem linkAs={Link} linkProps={{ to: '/' }}>
              Species
            </BreadcrumbItem>
          </Route>

          {appContext.selectedSpecies && (
            <Route path="/characters">
              <BreadcrumbItem linkAs={Link} linkProps={{ to: speciesLink }}>
                {appContext.selectedSpecies?.name}
              </BreadcrumbItem>
            </Route>
          )}

          {appContext.selectedCharacter && (
            <Route path="/characters/:characterId">
              <BreadcrumbItem>
                {appContext.selectedCharacter.name}
              </BreadcrumbItem>
            </Route>
          )}
        </Breadcrumb>
      </div>
    </>
  );
}