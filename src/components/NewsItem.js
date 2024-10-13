import React, { Component } from 'react'
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
import { Padding } from '@mui/icons-material';


export class NewsItem extends Component {


  render() {

    let { title, description, imgUrl, newsUrl, publishedAt } = this.props;

    return (
      <Card sx={{
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: 6,
        },
      }}>
        <div className='flex justify-between'>
          <div>

          <Typography level="title-lg"
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: '2',
              WebkitBoxOrient: 'vertical',
            }}
            >{title}</Typography>
          <Typography level="body-sm">{publishedAt}</Typography>
          </div>
          <IconButton
            aria-label="bookmark Bahamas Islands"
            variant="plain"
            color="neutral"
            size="sm"
            >
            <BookmarkAdd />
          </IconButton>
        </div>
        <AspectRatio minHeight="120px" maxHeight="200px">
          <img
            src={imgUrl?imgUrl:"https://www.livemint.com/lm-img/img/2024/07/01/600x338/GiganticJets_Xuanhua_2048_1719384143734_1719822697479.jpg"}
            // srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
        {/* <CardContent orientation=""> */}
        <div>
          <Typography level="body-xs"
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: '3',
              WebkitBoxOrient: 'vertical',
            }}
          >{description}</Typography>
        </div>
        <a
          href={newsUrl}
          target='_blank'
          // className='px-6 py-2 bg-blue-600 w-32 text-center text-white rounded-lg hover:bg-blue-800'
        >
          Read More
        </a>
        {/* </CardContent> */}
      </Card>
    )
  }
}

export default NewsItem
