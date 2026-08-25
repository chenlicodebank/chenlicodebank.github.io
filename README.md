# chenlicodebank.github.io

Source for my personal academic website, live at <https://chenlicodebank.github.io>.

Built on [al-folio](https://github.com/alshedivat/al-folio), an MIT-licensed Jekyll theme for
academics. The upstream project's documentation (installation, customisation, FAQ) lives in that
repository; this fork keeps only the content and the configuration behind the live site.

## Where the content lives

| Path                        | What                                                                       |
| --------------------------- | -------------------------------------------------------------------------- |
| `_pages/`                   | One file per page. `nav:` and `nav_order:` in the front matter set the navbar. |
| `_bibliography/papers.bib`  | Publications. `selected={true}` also promotes an entry to the landing page.  |
| `_projects/`                | One card per research project.                                              |
| `_data/`                    | CV (`cv.yml`), social links, repositories, coauthors, venues.                |
| `_posts/`, `_news/`         | Blog posts and short announcements. Currently empty.                         |
| `_config.yml`               | Site identity, SEO keywords, and the section toggles.                        |

## Running it locally

```
bundle install
bundle exec jekyll serve
```

## Deploying

There is no manual publish step. `.github/workflows/deploy.yml` rebuilds and publishes on every
push to `main` that touches content, assets, configuration or the `Gemfile` — so a push to `main`
is a release.
