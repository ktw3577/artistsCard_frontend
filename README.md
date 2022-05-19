{Object.entries(data).map(([_, albumData], index) => (
<Album key={index} albumData={albumData} />
))}
