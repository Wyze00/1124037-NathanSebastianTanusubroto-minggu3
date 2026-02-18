import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router";
import { 
    Container, Typography, TextField, MenuItem, Select, 
    FormControl, InputLabel, Card, CardContent, Box,Grid,
    ToggleButton, ToggleButtonGroup, Divider, CardActionArea, Paper
} from "@mui/material";
import { 
    SortByAlpha, CalendarToday, Person, Search as SearchIcon, ArrowUpward, ArrowDownward 
} from "@mui/icons-material";
import type { GetPostResponse } from "../../type/GetPostResponse";
import type { Post } from "../../type/Post";

export default function PostList(): React.JSX.Element {
    const [posts, setPosts] = useState<Post[]>([]);
    const [sortType, setSortType] = useState<number>(0);
    const [isAscending, setIsAscending] = useState<boolean>(true);
    const [searchString, setSearchString] = useState<string>('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch('http://localhost:5173/api/post');
                const data: GetPostResponse = await response.json();
                setPosts(data.records);
            } catch (error) {
                console.error("Failed to fetch posts:", error);
            }
        }
        fetchPost();
    }, []);

    const sortedPost = useMemo(() => {
        let newPost = [...posts];
        const direction = isAscending ? 1 : -1;

        if (sortType === 1) {
            newPost.sort((a, b) => a.title.localeCompare(b.title) * direction);
        } else if (sortType === 2) {
            newPost.sort((a, b) => a.createdAt.localeCompare(b.createdAt) * direction);
        } else if (sortType === 3) {
            newPost.sort((a, b) => a.user.name.localeCompare(b.user.name) * direction);
        }

        if (searchString) {
            newPost = newPost.filter((post) => 
                post.title.toLowerCase().includes(searchString.toLowerCase()) ||
                post.user.name.toLowerCase().includes(searchString.toLowerCase())
            );
        }

        return newPost;
    }, [posts, sortType, isAscending, searchString]);

    return (
        <Container maxWidth="lg" className="py-8">
            <Paper elevation={0} className="p-6 mb-8 border border-slate-200 bg-slate-50/50 rounded-xl">
                <Typography variant="h4" className="font-bold mb-6 text-slate-800">
                    Explore Posts
                </Typography>
                
                <Grid container spacing={3} alignItems="center">
                    <Grid size={{xs: 12, md: 4}}>
                        <TextField
                            fullWidth
                            placeholder="Search title or author..."
                            value={searchString}
                            onChange={(e) => setSearchString(e.target.value)}
                            InputProps={{
                                startAdornment: <SearchIcon className="text-slate-400 mr-2" />,
                            }}
                            size="small"
                        />
                    </Grid>

                    <Grid size={{xs: 12, md: 4, sm: 6}}>
                        <FormControl fullWidth size="small">
                            <InputLabel>Sort By</InputLabel>
                            <Select
                                value={sortType}
                                label="Sort By"
                                onChange={(e) => setSortType(Number(e.target.value))}
                            >
                                <MenuItem value={0}>Default</MenuItem>
                                <MenuItem value={1}><Box className="flex items-center gap-2"><SortByAlpha fontSize="small"/> Title</Box></MenuItem>
                                <MenuItem value={2}><Box className="flex items-center gap-2"><CalendarToday fontSize="small"/> Date Created</Box></MenuItem>
                                <MenuItem value={3}><Box className="flex items-center gap-2"><Person fontSize="small"/> Author</Box></MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid size={{xs: 12, md: 4, sm: 6}}>
                        <ToggleButtonGroup
                            value={isAscending}
                            exclusive
                            onChange={(_, value) => value !== null && setIsAscending(value)}
                            size="small"
                            color="primary"
                            className="bg-white"
                        >
                            <ToggleButton value={true} className="px-4">
                                <ArrowUpward fontSize="small" className="mr-1"/> Asc
                            </ToggleButton>
                            <ToggleButton value={false} className="px-4">
                                <ArrowDownward fontSize="small" className="mr-1"/> Desc
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </Grid>
                </Grid>
            </Paper>

            <Typography variant="h6" className="mb-4 font-semibold text-slate-700">
                Showing {sortedPost.length} Results
            </Typography>
            
            <Grid container spacing={3}>
                {sortedPost.map((post) => (
                    <Grid size={{xs: 12, md: 4, sm: 6}} key={post.id}>
                        <Card className="h-full hover:shadow-lg transition-shadow duration-300 border border-slate-100">
                            <CardActionArea onClick={() => navigate(`/post/${post.id}`)} className="h-full">
                                <CardContent className="flex flex-col h-full p-5">
                                    <Typography variant="overline" color="primary" className="font-bold">
                                        ID: {post.id}
                                    </Typography>
                                    <Typography variant="h6" className="font-bold line-clamp-2 mb-2">
                                        {post.title}
                                    </Typography>
                                    <Box className="mt-auto">
                                        <Divider className="my-3" />
                                        <Box className="flex justify-between items-center text-slate-500">
                                            <Typography variant="caption" className="flex items-center gap-1">
                                                <Person sx={{ fontSize: 14 }} /> {post.user.name}
                                            </Typography>
                                            <Typography variant="caption">
                                                {new Date(post.createdAt).toLocaleDateString()}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {sortedPost.length === 0 && (
                <Box className="text-center py-20">
                    <Typography color="textSecondary">No posts found matching your criteria.</Typography>
                </Box>
            )}
        </Container>
    );
}